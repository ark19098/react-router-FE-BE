import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <MainNavigation />
            <main>
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;

// Children will be placed at the place of outlet, based on route choosed.