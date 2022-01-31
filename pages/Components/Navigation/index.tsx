import React, { FC } from 'react';
import HomeView from '../../HomeView';
import { NavBar } from '../../NavBar';

export const Navigation: FC = () => {
    return (
        <div>
            <NavBar />
            <HomeView />
        </div>
    );
};
