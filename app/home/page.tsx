import React from 'react'
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { getInboxTasks } from '@/utils/supabase/dbActions';

import TaskList from '@/components/TasksList';
import Sidebar from '@/components/Sidebar';
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
import Alert from '@mui/material/Alert';


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
      <Sidebar username={user.user_metadata.first_name} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          // border: 'solid 1px green',
        }}
      >
        {/* <Alert sx = {{ position: 'absolute', z: 20 }} >Welcome back, {user.user_metadata.first_name}</Alert> */}
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