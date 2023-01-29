import { Avatar } from "@mui/material";
import React from "react";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="[ headerOption ] mr-5 flex cursor-pointer flex-col items-center text-gray-500 hover:text-black">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar
          sx={{ width: 25, height: 25 }}
          src={avatar}
        />
      )}
      <div className="[ headerOption__title ] text-xs">
        {title}
      </div>
    </div>
  );
}

export default HeaderOption;
