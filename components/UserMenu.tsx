'use client'

import React from 'react'
import {
    Menu,
    MenuItem,
    Typography,
    Button,
    Paper,
} from '@mui/material'
import { AccountCircle, Settings, Logout } from '@mui/icons-material';
import { useState } from 'react';
import { signOut } from '@/app/home/actions';

interface menuitems {
    username: string
    logoutFunction: () => void
}

const UserMenu = ({ username, logoutFunction }: menuitems) => {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(null)
    }
    return (
        <div>
            <Button variant='text' color='inherit' onClick={handleOpenUserMenu} sx={{ ml: 1, fontSize: 15 }}>
                <AccountCircle sx={{ mr: 1 }} />
                {username}
            </Button>
            <Menu
                sx={{
                    mt: '45px',
                    width: 250,
                    maxWidth: '100%',
                    '& .MuiMenu-paper': {
                        width: 300
                    }
                }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                
            >

                <MenuItem onClick={() => logoutFunction()} >
                    <Logout sx = {{ mr: 1 }}/>
                    <Typography>
                        Logout
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <Settings sx = {{ mr: 1 }}/>
                    <Typography>
                        Settings
                    </Typography>
                </MenuItem>

            </Menu>
        </div>

    )
}

export default UserMenu