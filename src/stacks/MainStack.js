import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen';
import EditNoteScreen from '../pages/EditNoteScreen';
const MainStack = createStackNavigator();

export default () =>(
    <MainStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#DDD'
        },
        headerTintColor: '#000'
    }}>
        <MainStack.Screen name="List" component={ListScreen}/>
        <MainStack.Screen name="EditNote" component={EditNoteScreen}/>
    </MainStack.Navigator>
);