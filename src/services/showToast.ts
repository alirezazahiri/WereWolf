import toast from "react-hot-toast";

const SUCCESS_STYLE = {
    background: "rgba(0, 0, 0, .3)",
    backdropFilter: "blur(20px)",
    border: "1px solid #50cb93",
    boxShadow: "0 0 12px #50cb93",
    padding: "1rem",
    fontSize: "1.4rem",
    color: "#50cb93",
};

const ERROR_STYLE = {
    background: "rgba(0, 0, 0, .3)",
    backdropFilter: "blur(20px)",
    border: "1px solid #DA0037",
    boxShadow: "0 0 12px #DA0037",
    padding: "1rem",
    fontSize: "1.4rem",
    color: "#DA0037",
};

const showToast = (status: string, message: string) => {
    toast.dismiss()
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
