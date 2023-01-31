import { Avatar } from "@mui/material";
import React from "react";

function SideBar() {
  return (
    <div className="[ sidebar ]">
      <div className="[ sidebar__top ]">
        <img src="" alt="" srcset="" />
        <Avatar className="[ sidebar__avatar ]" />
        <div className="">Dillon Ellis</div>
        <div className="">DillonZellis@gmail.com</div>
      </div>

      <div className="[ sidebar__stats ]">
        <div className="[ sidebar__stat ]">
          <div className="">Who's viewed your profile</div>
          <div className="[ sidebar__statNumber ]">
            2,543
          </div>
        </div>
        <div className="sidebar__stat">
          <div className="">Views on Post</div>
          <div className="[ sidebar__statNumber ]">
            1,522
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="">Recent</div>
      </div>
    </div>
  );
}

export default SideBar;
