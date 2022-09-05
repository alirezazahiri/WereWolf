import toast from "react-hot-toast";

const COMMON = {
  background: "rgb(0, 0, 0)",
  padding: "1rem",
  fontSize: "1.4rem",
};

const SUCCESS_STYLE = {
  ...COMMON,
  border: "1px solid #50cb93",
  boxShadow: "0 0 12px #50cb93",
  color: "#50cb93",
};

const ERROR_STYLE = {
  ...COMMON,
  border: "1px solid #DA0037",
  boxShadow: "0 0 12px #DA0037",
  color: "#DA0037",
};

const showToast = (
  status: "success" | "error",
  message: string | JSX.Element
) => {
  toast.dismiss();
  if (status === "success") {
    toast.success(message, {
      style: SUCCESS_STYLE,
    });
  } else if (status === "error") {
    toast.error(message, {
      style: ERROR_STYLE,
    });
  }
};

export default showToast;
