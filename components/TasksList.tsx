'use client'

import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress'
import { RadioButtonUnchecked, CheckCircle } from '@mui/icons-material'
import { deleteTask } from '@/utils/supabase/dbActions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


interface props {
  tasksList: { id: string, task_desc: string }[] | undefined,
}
export default function TaskList({ tasksList }: props) {
  const tasksLength = TaskList?.length;
  const [taskCompleting, setTaskCompleting] = useState<boolean[]>(Array(tasksLength).fill(false));

  const router = useRouter();

  const setTaskStatus = (index: number, status: boolean) => {
    setTaskCompleting(taskCompleting.map((taskStatus, ind) => {
      if (ind === index) {
        return status;
      } 
      return taskStatus;
    }))
  }
  return (
    <List>
      {tasksList?.map((task, index) => (
        <ListItem key={task.id} disablePadding>
          <Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} onChange={async () => {
            setTaskStatus(index, true);
            await deleteTask(task.id);
            setTaskStatus(index, false);
            router.refresh()
          }} />
          <ListItemText>
            {task.task_desc}
          </ListItemText>
          { taskCompleting[index] && <CircularProgress size={24} /> }
        </ListItem>
      ))}
    </List>
  );
}