import Post from "../components/Post/Post";
import { posts } from "../data/posts";

function Feed() {
    return (
        <div style={{ maxWidth: "945px", margin: "0 auto" }}>
            {posts.map((post) => (
                <Post key={post.post_id} postData={post} />
            ))}
        </div>
    );
}

export default Feed;
