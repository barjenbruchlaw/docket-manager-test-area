import { isValidElement, useContext } from "react";
import AlertContext from "../contexts/AlertContext";

const useAlert = () => useContext(AlertContext);

export const useDispatchAlert = (alert) => {
  const { dispatchAlert } = useContext(AlertContext);
  dispatchAlert(alert);
};

export default useAlert;
