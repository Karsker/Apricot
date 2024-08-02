'use server'
import { createClient } from "./server"
export const addTask = async (prevState: any, formData: FormData) => {
    const supabase = createClient();
    const taskDesc = formData.get('taskDesc');
    const { data: { user } } = await supabase.auth.getUser()
    const userId = user?.id
    
    // Add a new task to the tasks table
    const { error } = await supabase.from('tasks').insert({task_desc: taskDesc, user_id: userId});

    // if (error) {
    //     return {
    //         taskAdded: false
    //     }
    // } 
    // console.log('Added task' + taskDesc)
    return {
        taskAdded: true
    }

}

export const getInboxTasks = async() => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
   
    const { data, error } = await supabase.from('tasks').select('id, task_desc').eq('user_id', user?.id);
    if (error) {
        console.log(error);
        return
    }

    return data
}

export const deleteTask = async(taskId: string) => {
    const supabase = createClient();

    const res = await supabase.from('tasks').delete().eq('id', taskId);

    if (res.status === 204) {
        return true;
    }

    return false;
}