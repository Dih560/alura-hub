import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Main from '../screens/Main';
import Repositories from '../screens/Repositories/Index';
import CreateRepository from '../screens/Repositories/Create';
import InfoRepository from '../screens/Repositories/Info';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} options={{title: 'Perfil'}} />
      <Stack.Screen
        name="Repositories"
        component={Repositories}
        options={{title: 'Repositórios'}}
      />
      <Stack.Screen
        name="CreateRepository"
        component={CreateRepository}
        options={{title: 'Criar Repositório'}}
      />
      <Stack.Screen
        name="InfoRepository"
        component={InfoRepository}
        options={{title: 'Detalhes do Repositório'}}
      />
    </Stack.Navigator>
  );
}
