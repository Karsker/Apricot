'use server'
import { createClient } from "./server"
export const addTask = async (prevState: any, formData: FormData) => {
    const supabase = createClient();
    const taskDesc = formData.get('taskDesc');
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user?.id
    // console.log(taskDesc)
    // console.log('Adding task');
    // Add a new task to the tasks table
    const { error } = await supabase.from('tasks').insert({task_desc: taskDesc, user_id: userId});

    // if (error) {
    //     return {
    //         taskAdded: false
    //     }
    // } 
    console.log('Added task' + taskDesc)
    return {
        taskAdded: true
    }

}