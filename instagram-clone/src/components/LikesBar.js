function LikesBar({ likes }) {
    return (
        <span style={{ fontWeight: "bold", paddingLeft: "10px" }}>
            {likes} likes
        </span>
    );
}

export default LikesBar;
