import { useEffect } from "react"
import {
    ExclamationIcon,
    ExclamationCircleIcon,
    CheckIcon, XIcon
} from '@heroicons/react/solid'

const Snackbar = ({ notify, onNotify }) => {

    useEffect(() => {
        setTimeout(() => {
            onNotify(prevState => {
                return { ...prevState, open: false }
            });
        }, notify.autoHideDuration);

    }, [notify])

    const close = () => {
        onNotify(prevState => {
            return { ...prevState, open: false }
        });
    }

    return (
        <div className={`absolute gap-2 m-2 w-fit top-0 right-0 ${notify.open ? 'opacity-100' : 'opacity-0'} transition duration-500 ease-out`}>
            <div className={`ntf ${notify.type}`}>
                <div className="w-6">
                    {notify.type === 'success' ? <CheckIcon /> : notify.type === 'warning' ? <ExclamationIcon /> : < ExclamationCircleIcon />}
                </div>
                <span className="mx-2 block sm:inline">{notify.message}</span>
                <XIcon className="w-3 absolute top-0 right-0 m-2" onClick={close} />
            </div>
        </div>
    )
}

export default Snackbar