import swal from "sweetalert";


const showSwal = (title: string, icon: string, button: string, onButtonClick?: () => void) => {
    return swal({
        title,
        icon,
        // @ts-expect-error - button is a valid property in sweetalert
        button,
    }).then(() => {
        if (onButtonClick) {
            onButtonClick();
        }
    });
}


export default showSwal