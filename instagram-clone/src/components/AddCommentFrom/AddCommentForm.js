import styles from "./addCommentForm.module.css";

function AddCommentForm() {
    return (
        <form className={styles.commentForm}>
            <input
                className={styles.commentInput}
                type="text"
                name="comment"
                placeholder="Add comment..."
            />
            <input
                className={styles.commentSubmit}
                type="submit"
                value="Post"
            />
        </form>
    );
}

export default AddCommentForm;
