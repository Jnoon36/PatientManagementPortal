import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import AppBar from '@mui/material/AppBar';
import { Home } from './Home.js';
import { Counter } from './Counter.js';
import { FetchData } from './FetchData.js';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';
import "./Layout.css";
import MedicalInformation from '@mui/icons-material/MedicalInformation';

export const Layout = (props) => {

    const [module, setModule] = useState(<Home />)

    const modules = [
        {
            name: "Home",
            icon: <HomeIcon className="menu-icon" />,
            component: <Home />
        },
        {
            name: "Patients",
            icon: <MedicalInformationIcon className="menu-icon" />,
            component: <Counter />
        },
        {
            name: "Clinicians",
            icon: <PsychologyIcon className="menu-icon" />,
            component: <Home />
        },
        {
            name: "Appointments",
            icon: <CalendarMonthIcon className="menu-icon" />,
            component: <Counter />
        },
        {
            name: "Reports",
            icon: <BarChartIcon className="menu-icon" />,
            component: <Home />
        },
        {
            name: "Settings",
            icon: <SettingsIcon className="menu-icon" />,
            component: <Counter />
        },
        {
            name: "Log Out",
            icon: <LogoutIcon className="menu-icon" />,
            component: <Counter />
        }
    ]

    return (
        <div>
            <AppBar position="static" edge="start" variant="dense" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <Toolbar style={{
                    borderBottom: "2px solid black",
                    backgroundColor: "rgb(100, 100, 100)",
                    fontSize: "22px"
                }}>
                    Patient Management Portal
                </Toolbar>
                <Stack direction="horizontal">
                    <NavMenu options={modules} optionUpdater={setModule} />
                    <div className="container-fluid" style={{position: "relative", padding: "20px"}}>
                        {module}
                    </div>
                </Stack>
            </AppBar>
        </div>
    );
}
