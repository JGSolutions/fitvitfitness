import styles from "./sidenav.module.css";

export default function SideNav({open, children}) {
	return (
        <div className={`${styles.menuPanel} ${open ? styles.openPanel : styles.closePanel}`}>
            {children}
        </div>
	);
}