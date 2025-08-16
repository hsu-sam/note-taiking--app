// import SettingOptions from "../features/Settings/settingOptions";

import { Outlet } from "react-router-dom";
import SettingOptions from "../features/Settings/settingOptions";

function Setting() {
  return (
    <div className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
      <SettingOptions />
      <Outlet />
    </div>
  );
}

export default Setting;
