import useAuth from "../../Hooks/UseAuth";
import useAxiosBaseUrl from "../../Hooks/useAxiosBaseUrl";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Dashboard = () => {
  const { user } = useAuth();
  const axiosbasurl = useAxiosBaseUrl();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // console.log(parcels)

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This parcel will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        await axiosbasurl.delete(`/parcels/${id}`);
        Swal.fire("Deleted!", "Parcel has been deleted.", "success");

        // React Query cache refresh
        queryClient.invalidateQueries(["parcels", user?.email]);
      } catch (error) {
        Swal.fire("Error!", "Failed to delete parcel.", "error");
        console.error(error);
      }
    }
  };

  const handlepayment = (id) => {
    navigate(`/dashboard/payment/${id}`);
    // console.log(id)
  };

  const {
    data: parcels = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosbasurl.get(`/parcels?email=${user.email}`);
      return res.data.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-infinity loading-xl text-primary"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-center text-lg">
          Something went wrong: {error?.message || "Unknown error"}
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        📦 My Parcels Dashboard
      </h1>

      {parcels.length === 0 ? (
        <p className="text-center text-gray-500 text-sm md:text-base">
          No parcels found
        </p>
      ) : (
        <>
          {/* 🔹 Large screen: Table view */}
          <div className="hidden md:block overflow-x-auto shadow-xl rounded-2xl bg-base-100 border border-base-300">
            <table className="table table-zebra w-full text-sm md:text-base">
              <thead className="bg-base-200 text-base font-semibold">
                <tr>
                  <th>#</th>
                  <th>Tracking ID</th>
                  <th>Parcel</th>
                  <th>Sender</th>
                  <th>Receiver</th>
                  <th>Status</th>
                  <th>Payment</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {parcels.map((parcel, index) => (
                  <tr key={parcel._id} className="hover">
                    <td>{index + 1}</td>
                    <td className="font-semibold text-primary">
                      {parcel.trackingId}
                    </td>
                    <td>
                      <p className="font-medium">{parcel.parcelName}</p>
                      <p className="text-xs text-gray-500">
                        {parcel.parcelType}
                      </p>
                    </td>
                    <td>
                      <p className="font-medium">{parcel.senderName}</p>
                      <p className="text-xs text-gray-500">
                        {parcel.senderDistrict}
                      </p>
                    </td>
                    <td>
                      <p className="font-medium">{parcel.receiverName}</p>
                      <p className="text-xs text-gray-500">
                        {parcel.receiverDistrict}
                      </p>
                    </td>
                    <td>
                      <span
                        className={`badge badge-sm ${
                          parcel.parcelStatus === "pending"
                            ? "badge-warning"
                            : parcel.parcelStatus === "delivered"
                            ? "badge-success"
                            : "badge-info"
                        }`}
                      >
                        {parcel.parcelStatus}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`badge badge-sm ${
                          parcel.paymentStatus === "paid"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {parcel.paymentStatus}
                      </span>
                    </td>
                    <td>
                      {new Date(parcel.createdDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="flex flex-col gap-1">
                      {parcel.paymentStatus === "unpaid" && (
                        <button
                          onClick={() => handlepayment(parcel._id)}
                          className="btn btn-sm btn-primary w-full"
                        >
                          Pay
                        </button>
                      )}
                      <button className="btn btn-sm btn-outline w-full">
                        Details
                      </button>
                      <button
                        onClick={() => handleDelete(parcel._id)}
                        className="btn btn-sm btn-outline w-full"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 🔹 Small screen: Card view */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {parcels.map((parcel) => (
              <div
                key={parcel._id}
                className="card border border-base-300 shadow-md bg-base-100 p-4 rounded-xl"
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="font-semibold text-primary">
                    {parcel.parcelName}
                  </h2>
                  <span
                    className={`badge badge-sm ${
                      parcel.parcelStatus === "pending"
                        ? "badge-warning"
                        : parcel.parcelStatus === "delivered"
                        ? "badge-success"
                        : "badge-info"
                    }`}
                  >
                    {parcel.parcelStatus}
                  </span>
                </div>

                <p className="text-xs text-gray-500 mb-1">
                  Tracking ID:{" "}
                  <span className="font-medium">{parcel.trackingId}</span>
                </p>
                <p className="text-xs text-gray-500 mb-1">
                  Sender: {parcel.senderName} ({parcel.senderDistrict})
                </p>
                <p className="text-xs text-gray-500 mb-1">
                  Receiver: {parcel.receiverName} ({parcel.receiverDistrict})
                </p>
                <p className="text-xs text-gray-500 mb-1">
                  Date:{" "}
                  {new Date(parcel.createdDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <div className="mt-3 flex gap-2">
                  {parcel.paymentStatus === "unpaid" && (
                    <button
                      onClick={() => handlepayment(parcel._id)}
                      className="btn btn-sm btn-primary flex-1"
                    >
                      Pay
                    </button>
                  )}
                  <button className="btn btn-sm btn-outline flex-1">
                    Details
                  </button>
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-sm btn-outline flex-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
