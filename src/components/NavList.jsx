

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete ,Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/home' },
        { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Edit labels', icon: <Edit />, route: '/delete' },
        { id: 4, name: 'Trash', icon: <Delete />, route: '/delete' },

    ]
    
    return (
        <List>
        {
            navList.map(list => (
                <ListItem button key={list.id}>
                    <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                    </Link>
                </ListItem>
            ))
        }
        </List>
    )
}

export default NavList;