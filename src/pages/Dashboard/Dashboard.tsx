import Autocomplete from "devextreme-react/autocomplete";

import React from "react";
import { CustomToolbar } from "../../components/customtoolbar";
import { TaskTab } from "../../components/taskTabs";

export const Dashboard = () => {
  return (
    <div>
      <CustomToolbar />
      <TaskTab />
   </div>
  )
    
};
