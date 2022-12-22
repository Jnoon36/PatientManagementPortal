import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import './NavMenu.css';

export const NavMenu = (props) => {

    return (
        <div style={{ borderRight: "2px solid black", float: "right", height: "100vh", backgroundColor: "rgb(232, 233, 235)"}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton className="account-icon-button">
                        <ListItemIcon><AccountCircleIcon className="accountIcon" /></ListItemIcon>
                        <ListItemText className="account-icon-text" primary={"Welcome, User"} />
                    </ListItemButton>
                </ListItem>
                <hr style={{ backgroundColor: "rgb(0, 0, 0)" }} />
                {props.options.map((o, i) => (
                    <ListItem key={i} disablePadding>
                        <ListItemButton onClick={(event) => props.optionUpdater(o.component)} className="menu-icon-button">
                            <ListItemIcon>{o.icon}</ListItemIcon>
                            <ListItemText className="menu-icon-text" primary={o.name} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                {/*<ListItem disablePadding>*/}
                {/*    <ListItemButton className="menu-icon-button">*/}
                {/*        <ListItemIcon><HomeIcon className="menu-icon" /></ListItemIcon>*/}
                {/*        <ListItemText className="menu-icon-text" primary={"Home"} />*/}
                {/*    </ListItemButton>*/}
                {/*</ListItem>*/}
                {/*<ListItem disablePadding>*/}
                {/*    <ListItemButton className="menu-icon-button">*/}
                {/*        <ListItemIcon><MedicalInformationIcon className="menu-icon" /></ListItemIcon>*/}
                {/*        <ListItemText className="menu-icon-text" primary={"Patients"} />*/}
                {/*    </ListItemButton>*/}
                {/*</ListItem>*/}
                {/*<ListItem disablePadding>*/}
                {/*    <ListItemButton className="menu-icon-button">*/}
                {/*        <ListItemIcon><PsychologyIcon className="menu-icon" /></ListItemIcon>*/}
                {/*        <ListItemText className="menu-icon-text" primary={"Clinicians"} />*/}
                {/*    </ListItemButton>*/}
                {/*</ListItem>*/}
                {/*<ListItem disablePadding>*/}
                {/*    <ListItemButton className="menu-icon-button">*/}
                {/*        <ListItemIcon><CalendarMonthIcon className="menu-icon" /></ListItemIcon>*/}
                {/*        <ListItemText className="menu-icon-text" primary={"Appointments"} />*/}
                {/*    </ListItemButton>*/}
                {/*</ListItem>*/}
                {/*<ListItem disablePadding>*/}
                {/*    <ListItemButton className="menu-icon-button">*/}
                {/*        <ListItemIcon><BarChartIcon className="menu-icon" /></ListItemIcon>*/}
                {/*        <ListItemText className="menu-icon-text" primary={"Reports"} />*/}
                {/*    </ListItemButton>*/}
                {/*</ListItem>*/}
                {/*<ListItem disablePadding>*/}
                {/*    <ListItemButton className="menu-icon-button">*/}
                {/*        <ListItemIcon><SettingsIcon className="menu-icon" /></ListItemIcon>*/}
                {/*        <ListItemText className="menu-icon-text" primary={"Settings"} />*/}
                {/*    </ListItemButton>*/}
                {/*</ListItem>*/}
                {/*<ListItem disablePadding style={{marginBottom: "0%"}}>*/}
                {/*    <ListItemButton className="menu-icon-button">*/}
                {/*        <ListItemIcon><LogoutIcon className="menu-icon" /></ListItemIcon>*/}
                {/*        <ListItemText className="menu-icon-text" primary={"Log Out"} />*/}
                {/*    </ListItemButton>*/}
                {/*</ListItem>*/}
            </List>
        </div>
    );
}
