import React, { useState } from 'react';
import {
    AppBar,
    Box, Divider, Drawer, IconButton, List,
    ListItem,
    ListItemButton, ListItemText, Toolbar, Tooltip, Typography, ModalProps
} from '@mui/material';
import { Menu, ModeNight, WbSunny } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

const NavBar: React.FC<NavProps> = ({ toggleTheme, isDarkMode }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleOpenDrawer = () => {
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
    };

    const handleNavigation = (path: string) => {
        handleCloseDrawer();
        navigate(path);
    };

    const list = (
        <Box sx={{ width: 250 }} onClick={handleCloseDrawer}>
            <Box textAlign={"center"}>
                <Typography variant="h6" sx={{ my: 2, color: "#ff6933", fontWeight: "bold" }}>
                    Foodie
                </Typography>
            </Box>
            <Divider />
            <List sx={{ paddingX: 1 }}>
                <ListItem
                    disablePadding
                    sx={{
                        backgroundColor: location.pathname === '/' ? '#ff7f50' : 'inherit',
                        '&:hover': {
                            backgroundColor: '#ff7f50'
                        },
                        paddingX: 1, borderRadius: 2, my: 0.5
                    }}>
                    <ListItemButton onClick={() => handleNavigation("/")}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    disablePadding
                    sx={{
                        backgroundColor: location.pathname.includes("menu") ? '#ff7f50' : 'inherit',
                        '&:hover': {
                            backgroundColor: '#ff7f50'
                        },
                        paddingX: 1, borderRadius: 2, my: 0.5
                    }}
                >
                    <ListItemButton
                        onClick={() => handleNavigation("/menu")}
                    >
                        <ListItemText primary="Menu" />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    disablePadding
                    sx={{
                        backgroundColor: location.pathname === '/my-favorites' ? '#ff7f50' : 'inherit',
                        '&:hover': {
                            backgroundColor: '#ff7f50'
                        },
                        paddingX: 1, borderRadius: 2, my: 0.5
                    }}
                >
                    <ListItemButton onClick={() => handleNavigation("/my-favorites")}>
                        <ListItemText primary="My Favourites" />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    disablePadding
                    sx={{
                        backgroundColor: location.pathname === '/meal-generator' ? '#ff7f50' : 'inherit',
                        '&:hover': {
                            backgroundColor: '#ff7f50'
                        },
                        paddingX: 1, borderRadius: 2, my: 0.5
                    }}
                >
                    <ListItemButton onClick={() => handleNavigation("/meal-generator")}>
                        <ListItemText primary="Meal Generator" />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    disablePadding
                    sx={{
                        backgroundColor: location.pathname === '/about-me' ? '#ff7f50' : 'inherit',
                        '&:hover': {
                            backgroundColor: '#ff7f50'
                        },
                        paddingX: 1, borderRadius: 2, my: 0.5
                    }}
                >
                    <ListItemButton onClick={() => handleNavigation("/about-me")}>
                        <ListItemText primary="About Me" />
                    </ListItemButton>
                </ListItem>


            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: isDarkMode ? "#000000" : "#ff944d" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleOpenDrawer}
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Foodie
                    </Typography>
                    <Box>
                        <Tooltip title="Switch Theme">
                            <IconButton color="inherit" onClick={toggleTheme}
                                sx={{
                                    backgroundColor: isDarkMode ? "#f0f8ff" : "black", borderRadius: 5,
                                    '&:hover': {
                                        backgroundColor: isDarkMode ? "#f0f8ff" : "black",
                                    }
                                }}>
                                {isDarkMode ? <WbSunny sx={{ color: "gold" }} /> : <ModeNight />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleCloseDrawer}            
            >
                {list}
            </Drawer>
        </Box>
    );
}

export default NavBar;
