import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastMessage = {
  error: (msg: string) =>
    toast.error(msg, { position: toast.POSITION.TOP_CENTER, theme: "colored" }),
  success: (msg: string) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
    }),
  info: (msg: string) =>
    toast.info(msg, { position: toast.POSITION.TOP_CENTER, theme: "colored" }),
  warn: (msg: string) =>
    toast.warn(msg, { position: toast.POSITION.TOP_CENTER, theme: "colored" }),
};

export default toastMessage;
