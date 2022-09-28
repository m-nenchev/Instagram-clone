import styles from "./modalNewPost.module.css";

function ModalNewPost() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Create new post</div>
            <div className={styles.addPhoto}>Drag Photos and Videos here</div>
        </div>
    );
}

export default ModalNewPost;
