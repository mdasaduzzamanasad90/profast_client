import { BiErrorCircle } from "react-icons/bi";
import ParcelSender from "./ParcelSender";
import ParcelReceiver from "./ParcelReceiver";

const ParcelSenderAndReceiver = ({
  register,
  errors,
  warehouseList,
  senderSelectedWarehouse,
  senderSelecteddistrict,
  receiverSelectedWarehouse,
  receiverSelecteddistrict,
  senderPickUpDistricts,
  senderPickUpRigons,
  receiverPickUpDistricts,
  receiverPickUpRigons,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Sender */}
      <ParcelSender
        register={register}
        errors={errors}
        warehouseList={warehouseList}
        senderSelectedWarehouse={senderSelectedWarehouse}
        senderSelecteddistrict={senderSelecteddistrict}
        senderPickUpDistricts={senderPickUpDistricts}
        senderPickUpRigons={senderPickUpRigons}
      />

      {/* Receiver */}
      <ParcelReceiver
        register={register}
        errors={errors}
        warehouseList={warehouseList}
        receiverSelectedWarehouse={receiverSelectedWarehouse}
        receiverSelecteddistrict={receiverSelecteddistrict}
        receiverPickUpDistricts={receiverPickUpDistricts}
        receiverPickUpRigons={receiverPickUpRigons}
      />
    </div>
  );
};

export default ParcelSenderAndReceiver;
