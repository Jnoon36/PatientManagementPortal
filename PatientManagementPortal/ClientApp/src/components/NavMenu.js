import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import DatasetIcon from '@mui/icons-material/Dataset';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AppBar from '@mui/material/AppBar';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import './NavMenu.css';

export const NavMenu = () => {

    const width = 350;

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar style={{ textAlign: "center" }}>
                    Tool Bar
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                anchor="left"
                style={{width: "350px"}}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><AccountCircleIcon style={{ fontSize: "100px" }} /></ListItemIcon>
                            <ListItemText primary={"Welcome, User"} />
                        </ListItemButton>
                    </ListItem>
                    <hr />
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><MedicalInformationIcon /></ListItemIcon>
                            <ListItemText primary={"Patients"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><PsychologyIcon /></ListItemIcon>
                            <ListItemText primary={"Clinicians"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><CalendarMonthIcon /></ListItemIcon>
                            <ListItemText primary={"Appointments"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><BarChartIcon /></ListItemIcon>
                            <ListItemText primary={"Reports"} />
                        </ListItemButton>
                    </ListItem>
                </List>
                {/*<BottomNavigation*/}
                {/*    showLabels*/}
                {/*    style={{position: "fixed", bottom: "0%"}}*/}
                {/*>*/}
                {/*    <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />*/}
                {/*    <BottomNavigationAction label="Log Out" icon={<LogoutIcon />} />*/}
                {/*</BottomNavigation>*/}
            <Toolbar />
            </Drawer>
        </div>
    );
}
