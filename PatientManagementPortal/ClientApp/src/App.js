import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import PsychologyIcon from '@mui/icons-material/Psychology';

import './custom.css'

export const App = () => {

    const appRoutes = [
        {
            path: "/",
            exact: true,
            component: <Home />,
        },
        {
            path: "/counter",
            exact: false,
            component: <Counter />,
        },
        {
            path: "/fetch-data",
            exact: false,
            component: <FetchData />,
        }
    ]

    return (
        <Layout routes={appRoutes} >
            {appRoutes.map((r, i) => (
                <Route key={i} exact={r.exact} path={r.path} component={r.component} />
            ))}
        </Layout>
    );
}
