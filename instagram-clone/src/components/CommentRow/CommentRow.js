import styles from "./commentRow.module.css";

function CommentRow({ name, comment }) {
    return (
        <p className={styles.comment}>
            <span className={styles.commentUser}>{name}</span>
            {comment}
        </p>
    );
}

export default CommentRow;
