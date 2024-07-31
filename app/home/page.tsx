import React from 'react'
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { signOut } from './actions';
import UserMenu from '@/components/UserMenu';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  CssBaseline,
  Divider
} from '@mui/material';

import AddTaskButton from '@/components/AddTaskButton';
import { Inbox, CalendarToday, CalendarMonth, AddTask } from '@mui/icons-material';
import MuiDrawer from '@/components/MuiDrawer';

const Home = async () => {

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const drawerWidth = 270
  if (!user) {
    return redirect("/login?message=loggedOut");
  }
  return (
    <Box sx={
      {
        // border: "solid 1px blue",
        width: "100vw",
        margin: 0,
        display: 'flex'
      }
    }>
      <CssBaseline />
      {/* Navigation Bar */}
      {/* <AppBar position='fixed'
        color='primary'
        sx={{
          zIndex: 2,
          bgcolor: '#FF4149',
          ml: `${drawerWidth}px`
        }}>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Aporicot
          </Typography>
          
        </Toolbar>
      </AppBar> */}
      <Toolbar />
      {/* <form action={handleSignOut}>
                <Button variant='contained' type='submit'>Logout</Button>
            </form> */}

      {/* Sidebar */}
      <MuiDrawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          zIndex: 1,
          border: "none"

        }}
        PaperProps={{
          sx: {
            width: drawerWidth,
            border: "none",
            bgcolor: "#fffbf7"
          }
        }}>
        {/* <Toolbar /> */}


        <List dense>
          <ListItem disablePadding>
            <UserMenu username={user.user_metadata.first_name} logoutFunction={signOut}/>
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
      </MuiDrawer>
      <Box>
        {/* <Toolbar /> */}
        <Typography variant='h1'>Hello, {user.user_metadata.first_name}</Typography>
      </Box>
    </Box>
  )
}

export default Home