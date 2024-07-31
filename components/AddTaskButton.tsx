'use client'

import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { AddTask } from '@mui/icons-material';
import { useState, Fragment } from 'react';

export default function AddTaskButton() {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button variant='text' onClick={handleClickOpen} sx = {{ color: '#e95420', p: 2, fontSize: 15}}>
                <AddTask sx = {{ mr: 1 }}/>
                <Typography>
                    Add Task
                </Typography>
            </Button>
            <Dialog
                open={open}
                onClose={handleClickClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        console.log('Task added successfully');
                    },
                    
                }} 
                maxWidth = 'sm'
                fullWidth = {true}


            >
                <DialogTitle>Add Task</DialogTitle>
                <DialogContent>
                    <TextField 
                        autoFocus
                        required
                        margin='dense'
                        id='description'
                        label='Task description'
                        type='text'
                        fullWidth
                        variant='standard'
                        
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClickClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );

} 