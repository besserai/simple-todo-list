import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import AddNewItemField from './AddNewItemField';

export default function TodoList({ itemList, setItemList }) {

    const handleToggle = (id) => () => {
        const newItemList = itemList.map((item) => {
            if (item.id == id) {
                item.done = !item.done;
            }
            return item
        });
        setItemList(newItemList)
    };

    const handleDelete = (id) => () => {
        const newItemList = []
        for (let item of itemList) {
            if (item.id != id) {
                newItemList.push(item);
            }
        }

        setItemList(newItemList)
    }

    return (<>
        <List sx={{ width: '100%', maxWidth: 360 }}>
            {itemList.map((item) => {
                const itemId = `checkbox-list-label-${item.id}`;

                return (
                    <ListItem
                        key={item.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="comments" onClick={handleDelete(item.id)}>
                                <Delete />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(item.id)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={item.done}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': itemId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={itemId} primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
        <AddNewItemField itemList={itemList} setItemList={setItemList} />
    </>

    );
}