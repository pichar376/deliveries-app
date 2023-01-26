import { useState } from "react";
import DeliveryStorageService from "../services/DeliveryStorageService";

const useDeliveryHistory = () => {
  const [deliveryHistory, setDeliveryHistory] = useState(
    DeliveryStorageService.getAll()
  );

  return [deliveryHistory, setDeliveryHistory];
};

export default useDeliveryHistory;
