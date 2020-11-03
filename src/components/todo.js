import {List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'


function todo(props) {
    return (
        <List className="todoList">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo} secondary="DeadLine"/>
            </ListItem>
        </List>
    )
}

export default todo
