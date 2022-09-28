import { CommentIcon, LikeIcon, SaveIcon, ShareIcon } from "../../img";
import styles from "./actionsBar.module.css";

function ActionsBar() {
    return (
        <ul className={styles.ul}>
            <li className={styles.actionBtns}>
                <LikeIcon />
            </li>
            <li className={styles.actionBtns}>
                <CommentIcon />
            </li>
            <li className={styles.actionBtns}>
                <ShareIcon />
            </li>
            <li className={styles.saveBtn}>
                <SaveIcon />
            </li>
        </ul>
    );
}

export default ActionsBar;
