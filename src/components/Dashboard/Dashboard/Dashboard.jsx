import React from "react";
import styles from "./Dashboard.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Orders from "./Orders/Orders";
import DashboardActions from "../DashboardActions/DashboardActions";
import DashboardAlerts from "../DashboardAlerts/DashboardAlerts";

const Dashboard = () => {
  return (
    <div className={styles.dash_cont}>
      <div className={styles.dashboard}>
        <div className={styles.dash_head}>
          <div className={styles.head}>Dashboard</div>
          <div className={styles.opt}>
            <SearchOutlinedIcon className={styles.dash_icons} />
            <hr></hr>
            <NotificationsNoneOutlinedIcon className={styles.dash_icons} />
            <hr></hr>
            <MoreVertOutlinedIcon className={styles.dash_icons} />
          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.cont1}>
            <Orders />
          </div>
          <div className={styles.cont2}>
            <Orders />
          </div>
          <div className={styles.cont3}>
            <Orders />
          </div>
          <div className={styles.cont4}>
            <Orders />
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <DashboardActions />
      </div>
      <div className={styles.alerts}>
        <DashboardAlerts />
      </div>
    </div>
  );
};

export default Dashboard;
