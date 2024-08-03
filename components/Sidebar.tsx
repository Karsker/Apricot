'use client'

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddTaskButton from "./AddTaskButton";
import UserMenu from "./UserMenu";
import { signOut } from "@/app/home/actions";
import { Inbox, CalendarMonth, CalendarToday, Menu, Close } from "@mui/icons-material";

import { useState } from "react";

const drawerWidth = 240

interface props {
  username: string
}

export default function Sidebar({ username }: props) {

  const [open, setOpen] = useState(false);
  
  const theme = useTheme();
  const largerScreen = useMediaQuery(theme.breakpoints.up('md'));

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }


  return (
    <div>
      <IconButton onClick={handleDrawerOpen} sx = {{position: 'absolute'}}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        variant = {largerScreen?'permanent':'temporary'}
        sx={{
          width: drawerWidth,
          zIndex: 1,
          // border: "solid 1px red"

        }}
        PaperProps={{
          sx: {
            width: drawerWidth,
            border: "none",
            bgcolor: "#fffbf7"
          }
        }}

        onClose={handleDrawerClose}>


        <List dense>
          <ListItem disablePadding sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <UserMenu username={username} logoutFunction={signOut} />
            {/* <IconButton onClick={handleDrawerClose}><Close sx={{ fontSize: 'inherit' }} /></IconButton> */}
          </ListItem>

          <ListItem disablePadding>
            <AddTaskButton />
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Inbox />
              </ListItemIcon>
              <ListItemText>Inbox</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarToday />
              </ListItemIcon>
              <ListItemText>Today</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText>Upcoming</ListItemText>
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
    </div>
  );
}