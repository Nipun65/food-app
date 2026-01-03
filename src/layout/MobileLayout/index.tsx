import React from "react";
import styles from "./index.module.css";
import StatusBar from "../../components/StatusBar"; 

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <StatusBar />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default MobileLayout;