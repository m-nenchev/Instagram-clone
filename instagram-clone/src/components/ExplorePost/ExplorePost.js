import { CommentIcon, LikeIcon } from "../../img";
import styles from "./explorePost.module.css";
import { useDispatch } from "react-redux";
import { show } from "../../store/modalSlice";

function ExplorePost({ postData }) {
    const { likes, comments, post_img_url } = postData;
    const dispatch = useDispatch();

    function handlePostClick(e) {
        dispatch(show({ type: "post", data: { postData } }));
    }

    return (
        <div onClick={handlePostClick} className={styles.wrapper}>
            <img
                src={post_img_url}
                alt="explore post"
                className={styles.explorePost}
            />

            <div className={styles.postDetails}>
                <span className={styles.postIcons}>
                    <LikeIcon />
                    {likes}
                </span>
                <span>
                    <CommentIcon />
                    {comments.length}
                </span>
            </div>
        </div>
    );
}

export default ExplorePost;
