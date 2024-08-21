import React from 'react'
import UserAuth from './UserAuth';
import UserNotAuth from './UserNotAuth';
import { NavigationContainer } from '@react-navigation/native';

const RootNavigation = () => {
    const isAuth = true;
    return (
        <NavigationContainer>
            {
                isAuth ? <UserAuth /> : <UserNotAuth />
            }
        </NavigationContainer>
    )
}

export default RootNavigation
