import React from 'react'
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { signOut } from './actions';
import { getInboxTasks, deleteTask } from '@/utils/supabase/dbActions';
import UserMenu from '@/components/UserMenu';
import TaskList from '@/components/TasksList';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Divider,
  Checkbox
} from '@mui/material';

import AddTaskButton from '@/components/AddTaskButton';
import { Inbox, CalendarToday, CalendarMonth, AddTask, RadioButtonUnchecked, CheckCircle } from '@mui/icons-material';
import MuiDrawer from '@/components/MuiDrawer';

const Home = async () => {

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const drawerWidth = 270
  const tasksList = await getInboxTasks()



  if (!user) {
    return redirect("/login?message=loggedOut");
  }
  return (
    <Box sx={
      {
        // border: "solid 1px blue",
        width: "100vw",
        margin: 0,
        display: 'flex',
        padding: 0
      }
    }>
      <CssBaseline />

      {/* Sidebar */}
      <MuiDrawer
        variant='permanent'
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
        }}>


        <List dense>
          <ListItem disablePadding>
            <UserMenu username={user.user_metadata.first_name} logoutFunction={signOut} />
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          // border: 'solid 1px green',
        }}
      >

        <Box
          sx={{
            // border: 'solid 1px red',
            mt: 5
          }}
        >
          <Typography variant='h1'>Inbox</Typography>

          <TaskList tasksList={tasksList} />
        </Box>
      </Box>
    </Box>
  )
}

export default Home