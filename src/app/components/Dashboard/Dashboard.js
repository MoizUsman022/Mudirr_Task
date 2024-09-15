import React from "react";

import classes from "./dashboard.module.scss";
import ProjectStatus from "../ProjectsStatus/ProjectStatus";
import Tabs from "../Tabs/Tabs";
import ProjectGrid from "../ProjectCards/ProjectCards";
import Footer from "../Footer/Footer";
const Dashboard = () => {

  const projectstatuses = [
    { status: 'Completed', imageSrc: '/folder_1.png', number:'30'  },
    { status: 'Ongoing', imageSrc: '/folder_2.png', number:'02'},
    { status: 'Drafts', imageSrc: '/folder_3.png', number:'04'},
    { status: 'Cancelled', imageSrc: '/folder_4.png', number:'02'}
  ];

  return (
    <div className={classes.dashboard}>
      <div className={classes.texticons}>
        <h1>Welcome Back, Moiz!</h1>
        <p>You have accomplished a lot today. Let us handle the rest.</p>
        <div className={classes.projects}>
        <ProjectStatus projectstatuses={projectstatuses}/>
        </div>
        <Tabs/>
        <ProjectGrid/>
        
        </div>
        <Footer/>   
    </div>
  );
};

export default Dashboard;
