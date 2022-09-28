import styles from "./modalWrapper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hide, getModalType, getModalData } from "../../store/modalSlice";
import ModalPost from "../ModalPost/ModalPost";
import ModalNewPost from "../ModalNewPost/ModalNewPost";

function ModalWrapper() {
    const dispatch = useDispatch();
    const modalType = useSelector(getModalType);
    const modalData = useSelector(getModalData);

    function modalComponent() {
        switch (modalType) {
            case "post":
                return <ModalPost data={modalData.postData} />;
            case "newPost":
                return <ModalNewPost />;
            default:
                return <span>No modal Type matches</span>;
        }
    }

    function handleCloseModal() {
        dispatch(hide());
    }

    return (
        <div className={styles.wrapper}>
            <span className={styles.close} onClick={handleCloseModal}>
                X
            </span>
            {modalComponent()}
        </div>
    );
}

export default ModalWrapper;
