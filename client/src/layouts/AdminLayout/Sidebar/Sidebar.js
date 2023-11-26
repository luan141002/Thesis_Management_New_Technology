import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PeopleIcon from '@mui/icons-material/People';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptIcon from '@mui/icons-material/Receipt';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

const StyledListItemIcon = styled(ListItemIcon)({
    minWidth: '40px',
});
function Sidebar() {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const drawer = (
        <Box height="100%" sx={{ backgroundColor: 'rgb(28,37,54)' }}>
            <CssBaseline />
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontSize: '18px',
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: '#fff',
                        textDecoration: 'none',
                    }}
                >
                    THESIS FORUM
                </Typography>
            </Toolbar>
            <Box sx={{ overflow: 'auto' }}>
                <List sx={{ ml: '8px' }}>
                    <Link to={'/dashboard'}>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={selectedIndex === 0}
                                onClick={() => handleListItemClick(0)}
                            >
                                <StyledListItemIcon sx={{ minWidth: '40px' }}>
                                    <EqualizerIcon fontSize="medium" sx={{ color: '#fff' }} />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Dashboard"
                                    primaryTypographyProps={{ fontSize: '16px', color: '#fff' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to={'/manage-student'}>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={() => handleListItemClick(1)}
                            >
                                <StyledListItemIcon>
                                    <PeopleIcon fontSize="medium" sx={{ color: '#fff' }} />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Student"
                                    primaryTypographyProps={{ fontSize: '16px', color: '#fff' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to={'/manage-faculty'}>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={() => handleListItemClick(2)}
                            >
                                <StyledListItemIcon>
                                    <PeopleIcon fontSize="medium" sx={{ color: '#fff' }} />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Faculty"
                                    primaryTypographyProps={{ fontSize: '16px', color: '#fff' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to={'/manage-schedule'}>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={selectedIndex === 3}
                                onClick={() => handleListItemClick(3)}
                            >
                                <StyledListItemIcon>
                                    <ReceiptIcon fontSize="medium" sx={{ color: '#fff' }} />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Schedule"
                                    primaryTypographyProps={{ fontSize: '16px', color: '#fff' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to={'/manage-thesis'}>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={selectedIndex === 4}
                                onClick={() => handleListItemClick(4)}
                            >
                                <StyledListItemIcon>
                                    <ReceiptIcon fontSize="medium" sx={{ color: '#fff' }} />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Thesis"
                                    primaryTypographyProps={{ fontSize: '16px', color: '#fff' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to={'/manage-term'}>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={selectedIndex === 5}
                                onClick={() => handleListItemClick(5)}
                            >
                                <StyledListItemIcon>
                                    <ReceiptIcon fontSize="medium" sx={{ color: '#fff' }} />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Term"
                                    primaryTypographyProps={{ fontSize: '16px', color: '#fff' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to={'/manage-major'}>
                        <ListItem disablePadding>
                            <ListItemButton
                                selected={selectedIndex === 6}
                                onClick={() => handleListItemClick(6)}
                            >
                                <StyledListItemIcon>
                                    <ReceiptIcon fontSize="medium" sx={{ color: '#fff' }} />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Major"
                                    primaryTypographyProps={{ fontSize: '16px', color: '#fff' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Box>
    );

    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' },
            }}
            open
        >
            {drawer}
        </Drawer>
    );
}

export default Sidebar;
