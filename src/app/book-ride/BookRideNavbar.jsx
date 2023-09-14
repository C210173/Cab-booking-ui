import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  IconButton,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { deepOrange } from "@mui/material/colors";
import { drawerList } from "./DrawerList";

const BookRideNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handlerSidebarClose = () => setSidebarOpen(false);
  const handlerSidebarOpen = () => setSidebarOpen(true);
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#120E43" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handlerSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hao Cad
          </Typography>
          {true ? (
            <Avatar
              onClick={() => router.push("/profile")}
              className="cursor-pointer"
              sx={{ bgcolor: deepOrange[500] }}
            >
              A
            </Avatar>
          ) : (
            <Button onClick={() => router.push("login")} color="inherit">
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handlerSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>
  );
};

export default BookRideNavbar;
