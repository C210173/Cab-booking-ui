"use client";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export const drawerList = (anchor) => (
  <Box
    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
    role="presentation"
  >
    <List>
      {["Book Your Ride", "Rate Card", "Support"].map((text, index) => (
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Your Ride"} />
        </ListItemButton>
      </ListItem>
    </List>
  </Box>
);
