import * as React from "react";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { Tab, Tabs } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Box } from "@mui/system";
import ActivityFeed from "./ActivityFeed";
import ArchivedFeed from "./ArchivedFeed";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab
          icon={<PhoneIcon />}
          sx={{ width: "50%" }}
          aria-label="phone"
          value={0}
        />
        <Tab
          icon={<ArchiveIcon />}
          sx={{ width: "50%" }}
          aria-label="archive"
          value={1}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ActivityFeed />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArchivedFeed />
      </TabPanel>
    </React.Fragment>
  );
}
