import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FiSearch } from "react-icons/fi";

// 🔹 Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [50, 50],
  shadowAnchor: [14, 47],
});

// 🔹 FlyTo helper component
const FlyToLocation = ({ position, zoom }) => {
  const map = useMap();
  if (position) map.flyTo(position, zoom, { duration: 1.5 });
  return null;
};

const BangladeshMap = () => {
  const [districts, setDistricts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapCenter, setMapCenter] = useState([23.685, 90.3563]); // Default Bangladesh center
  const [zoom, setZoom] = useState(7);
  const [flyToPos, setFlyToPos] = useState(null);
  const [flyZoom, setFlyZoom] = useState(7);

  // 🔹 Load JSON data
  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data))
      .catch((err) => console.error("JSON load error:", err));
  }, []);

  // 🔹 Search function
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.toLowerCase().trim(); // Spaces ও case insensitive
    const result = districts.find((d) => d.district.toLowerCase() === query);
    if (result) {
      setFlyToPos([result.latitude, result.longitude]);
      setFlyZoom(13);
      setMapCenter([result.latitude, result.longitude]); // Update center state
      setZoom(10); // Update zoom state
    } else {
      alert("District not found!");
    }
  };

  if (!districts.length)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <span className="loading loading-spinner loading-xl text-blue-600"></span>
        <p className="mt-4 text-gray-500 font-medium text-lg">
          Loading data...
        </p>
      </div>
    );
  return (
    <div className="max-w-6xl md:mx-auto mx-5 px-4 py-10 text-center mb-10 md:mb-20 mt-28 bg-white rounded-3xl shadow-2xl">
      <h1 className="text-3xl font-bold mb-2">
        We are available in 64 districts
      </h1>
      <p className="text-gray-600 mb-6">
        We deliver almost all over Bangladesh
      </p>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex justify-center mb-6 gap-2">
        <div className="relative w-72">
          <input
            type="text"
            placeholder="Search district..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-asad focus:border-asad transition-all focus:ring-offset-2 focus:ring-offset-white duration-500"
          />
          <FiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <button
          type="submit"
          className="btn bg-[#CAEB66] text-gray-800 font-semibold border-none px-6 py-2 rounded-xl shadow-md hover:bg-[#b8db58] hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-[#CAEB66]/50 transition-all duration-500"
        >
          Search
        </button>
      </form>

      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={mapCenter}
          zoom={zoom}
          scrollWheelZoom={true}
          className="h-[80vh] w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* FlyTo component */}
          {flyToPos && <FlyToLocation position={flyToPos} zoom={flyZoom} />}

          {/* Markers */}
          {districts.map((dist, index) => (
            <Marker
              key={index}
              position={[dist.latitude, dist.longitude]}
              icon={customIcon}
            >
              <Popup>
                <div>
                  <h2 className="font-bold text-lg">{dist.district}</h2>
                  <p>
                    <strong>Region:</strong> {dist.region}
                    <br />
                    <strong>City:</strong> {dist.city}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Covered Areas:</strong>{" "}
                    {dist.covered_area.join(", ")}
                  </p>
                  <a
                    href={dist.flowchart}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline text-sm mt-2 block"
                  >
                    View Flowchart
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default BangladeshMap;
