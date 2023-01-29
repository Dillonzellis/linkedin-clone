import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React from "react";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="[ header ] sticky top-0 z-10 flex justify-evenly border-b-2 border-gray-100 py-2">
      <div className="[ header__left ] flex">
        <img
          className="mr-2 h-10 object-contain"
          src="src/assets/linkedin.png"
          alt=""
        />
        <div className="[ header__search ] flex items-center rounded-md bg-slate-100 p-2 text-gray-600">
          <SearchIcon />
          <input className="bg-transparent" type="text" />
        </div>
      </div>
      <div className="[ header__right ] flex">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="My Network"
        />
        <HeaderOption
          Icon={BusinessCenterIcon}
          title="Jobs"
        />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption
          Icon={NotificationsIcon}
          title="Notifications"
        />

        <HeaderOption
          avatar="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Ff6%2F2a%2Fea%2Ff62aea127567058424ad343b9304e2a8.jpg&f=1&nofb=1&ipt=4ef829a58fb4a16cf06919610f8026913a486d7b23175b3379f2a818b66cd7e4&ipo=images"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
