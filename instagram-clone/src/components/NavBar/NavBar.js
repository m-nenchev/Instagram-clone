import styles from "./navBar.module.css";
import {
    HomeIcon,
    LikeIcon,
    ShareIcon,
    NewPostIcon,
    FindPeopleIcon,
} from "../../img/index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { show } from "../../store/modalSlice";

function NavBar() {
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.navContainer}>
                <Link className={styles.navLogo} to="/">
                    Instagram Clone
                </Link>
                <input
                    className={styles.navSearch}
                    type="search"
                    name="search"
                    placeholder="Search"
                />
                <ul className={styles.navActionsContainer}>
                    <li className={styles.navAction}>
                        <Link to="/">
                            <HomeIcon />
                        </Link>
                    </li>
                    <li className={styles.navAction}>
                        <ShareIcon />
                    </li>
                    <li
                        className={styles.navAction}
                        onClick={() =>
                            dispatch(show({ type: "newPost", data: {} }))
                        }
                    >
                        <NewPostIcon />
                    </li>
                    <li className={styles.navAction}>
                        <Link to="/explore">
                            <FindPeopleIcon />
                        </Link>
                    </li>
                    <li className={styles.navAction}>
                        <LikeIcon />
                    </li>
                    <li className={styles.navAction}>
                        <LikeIcon />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
