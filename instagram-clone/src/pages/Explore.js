import ExplorePost from "../components/ExplorePost/ExplorePost";
import { posts } from "../data/posts";

function Explore() {
    return (
        <div
            style={{
                maxWidth: "945px",
                margin: "0 auto",
                display: "flex",
                gap: "15px",
                marginTop: "50px",
                flexWrap: "wrap",
            }}
        >
            {posts.map((post) => (
                <ExplorePost key={post.post_id} postData={post} />
            ))}
        </div>
    );
}

export default Explore;
