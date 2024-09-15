import React from "react";
import UserProfile from "../UserProfile/UserProfile";
import DashComponents from "../DashComponents/DashComponents";
import classes from "./sidenav.module.scss";
import WorkSpaces from "../Workspaces/WorkSpaces";
import Launchpad from "../LaunchPad/LaunchPad";
import PinnedProjects from "../PinnedProjects/PinnedProjects";
import AccountSettings from "../AccountSettings/AccountSettings";
import PersonalInvite from "../Personal_Invite/PersonalInvite";

const SideNav = () => {
  const user = {
    picSrc: "/profile-pic.jpg",
    username: "Moiz Usman",
    email: "moizusman664@gmail.com",
  };

  return (
    <div className={classes.sidenav}>
      <p className={classes.logo}>LOGO</p>
      <UserProfile
        picSrc={user.picSrc}
        username={user.username}
        email={user.email}
      />
      <PersonalInvite />
      <div className={classes.dashcomponents}>
        <DashComponents />
        <hr className={classes.customhr} />
        <WorkSpaces />
        <hr className={classes.customhr} />
        <Launchpad />
      </div>
      <PinnedProjects />
      <hr className={classes.customhr} />
      <AccountSettings />
    </div>
  );
};

export default SideNav;
