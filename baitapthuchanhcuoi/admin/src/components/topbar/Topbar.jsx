import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">CUONNEADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://scontent.fhan5-1.fna.fbcdn.net/v/t39.30808-6/358675798_286771647215431_7910400058148319472_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=d3QVWyOFpl8AX8KeSR1&_nc_ht=scontent.fhan5-1.fna&oh=00_AfAqjsyAhIcJTGfS_x8zUCYA97Sxzw-op2cM1pUmQ4nNVQ&oe=64BEDD78"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
