import React from "react";
import styles from "./drawer.module.css";
import { CloseIcon } from "../icons";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}
const Drawer = ({ isOpen, setIsOpen, children }: DrawerProps) => {
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? `${styles.drawer} ${styles.open}` : styles.drawer}>
      <div onClick={toggleDrawer} className={styles.drawerButton}>
        <CloseIcon />
      </div>

      <div className={styles.drawerContent}>{children}</div>
    </div>
  );
};

export default Drawer;
