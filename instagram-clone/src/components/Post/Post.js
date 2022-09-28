import ActionsBar from "../ActionsBar/ActionsBar";
import AddCommentForm from "../AddCommentFrom/AddCommentForm";
import CommentRow from "../CommentRow/CommentRow";
import LikesBar from "../LikesBar";
import styles from "./post.module.css";
import UserMiniCard from "../UserMiniCard/UserMiniCard";

function Post({ postData }) {
    const { user, location, post_img_url, likes, comments, caption } = postData;

    return (
        <div className={styles.container}>
            <UserMiniCard user={user} location={location} />
            <div className={styles.imgWrapper}>
                <img className={styles.postImg} src={post_img_url} alt="POST" />
            </div>
            <ActionsBar />
            <LikesBar likes={likes} />
            <div className={styles.commentsWrapper}>
                <CommentRow name={user.username} comment={caption} />
                {comments.map((comment) => (
                    <CommentRow name={comment.name} comment={comment.content} />
                ))}
            </div>
            <AddCommentForm />
        </div>
    );
}

export default Post;
