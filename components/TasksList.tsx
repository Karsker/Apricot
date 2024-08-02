'use client'

import {
    List,
    ListItem,
    ListItemText,
    Checkbox,
} from '@mui/material'

import { RadioButtonUnchecked, CheckCircle } from '@mui/icons-material'
import { deleteTask } from '@/utils/supabase/dbActions'
import { useRouter } from 'next/navigation'


interface props {
    tasksList: { id: string, task_desc: string }[] | undefined,
}
export default function TaskList({ tasksList }: props) {

    const router = useRouter();
    return (
        <List>
            {tasksList?.map(task => (
                <ListItem key={task.id} disablePadding>
                    <Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} onChange={async () => {
                        await deleteTask(task.id);
                        router.refresh()
                    }} />
                    <ListItemText>
                        {task.task_desc}
                    </ListItemText>

                </ListItem>
            ))}
        </List>
    );
}