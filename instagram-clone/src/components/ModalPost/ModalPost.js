import ActionsBar from "../ActionsBar/ActionsBar";
import AddCommentForm from "../AddCommentFrom/AddCommentForm";
import CommentRow from "../CommentRow/CommentRow";
import LikesBar from "../LikesBar";
import styles from "./modalPost.module.css";
import UserMiniCard from "../UserMiniCard/UserMiniCard";

function ModalPost({ data }) {
    console.log(data);
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={data.post_img_url} alt="post" />
            <div className={styles.section}>
                <UserMiniCard user={data.user} />
                <div className={styles.commentSection}>
                    {data.comments.map((comment) => (
                        <CommentRow
                            name={comment.name}
                            comment={comment.content}
                        />
                    ))}
                </div>
                <ActionsBar />
                <LikesBar likes={data.likes} />
                <AddCommentForm />
            </div>
        </div>
    );
}

export default ModalPost;
