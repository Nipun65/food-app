import styles from "./index.module.css";
import { Signal, Wifi, BatteryFull } from "lucide-react"; 

const StatusBar = () => {
  return (
    <div className={styles.statusBar}>
      <div className={styles.time}>9:11</div>
      <div className={styles.icons}>
        <Signal size={16} fill="black" />
        <Wifi size={16} />
        <BatteryFull size={20} />
      </div>
    </div>
  );
};

export default StatusBar;