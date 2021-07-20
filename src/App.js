import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';
import Consult from './views/Consult';
import ListData from './views/ListData';

const Stack = createStackNavigator();

export default props => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Consult"
            screenOptions={screnOptions}
        >
        <Stack.Screen
            name={'Consult'}
            component={Consult}
            options={{title:"Consulta CNPJ"}}
        />
        <Stack.Screen
            name={'ListData'}
            component={ListData}
            options={{title:"Dados do CNPJ"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screnOptions = {
    headerStyle: {
        backgroundColor: "#635E5D"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: "bold"
    }
}
