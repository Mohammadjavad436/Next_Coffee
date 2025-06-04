import Swal from "sweetalert2";

type SwalIcon = "success" | "error" | "warning" | "info" | "question";

const showSwal = (
    title: string,
    icon: SwalIcon,
    button: string,
    onButtonClick?: () => void
) => {
    return Swal.fire({
        title,
        icon,
        confirmButtonText: button,
    })
        .then(() => {
            if (onButtonClick) {
                onButtonClick();
            }
        })
        .catch((error) => {
            console.error('Error showing alert:', error);
        });
}

export default showSwal;