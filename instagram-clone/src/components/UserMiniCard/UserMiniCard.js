import { ActionsIcon } from "../../img";
import styles from "./userMiniCard.module.css";

function UserMiniCard({ user, location }) {
    return (
        <div className={styles.postHeader}>
            <div className={styles.postHeaderMain}>
                <img
                    className={styles.postHeaderImgs}
                    src={user.profile_pic_url}
                    alt="profile"
                />
                <div>
                    <span className={styles.span}>{user.username}</span>
                    <span className={styles.span}>{location}</span>
                </div>
            </div>
            <ActionsIcon />
        </div>
    );
}

export default UserMiniCard;
