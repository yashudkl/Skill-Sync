import { toast } from "react-toastify"

export const toastError = (msg: string = "Error") => {
    toast.error(msg, {
        hideProgressBar: true,
        theme: "colored",
    })
}

export const toastSuccess = (msg: string = "Successs") => {
    toast.success(msg, {
        hideProgressBar: true,
        theme: "colored"
    })
}