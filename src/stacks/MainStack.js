import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () =>{
    <Stack.Navigator>
        <Stack.Screen name="carregar" component={carregar} />
        <Stack.Screen name="menu" component={menu} />
        <Stack.Screen name="funfando" component={funfando} />
    </Stack.Navigator>
}