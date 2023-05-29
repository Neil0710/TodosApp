import React from 'react'
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import './Todo.css'


export default function Todo(props) {
    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                    <ListItemText primary={props.text} secondary='Dummy Deadline'/>
                </ListItemAvatar>
            </ListItem>
        </List>
    )
}
