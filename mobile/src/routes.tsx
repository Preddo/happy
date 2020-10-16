import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import CreateOrphanage from './pages/CreateOrphanage';
import Header from './components/Header';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#f2f3f5'
          }
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        
        <Screen
          name="OrphanageDatail" 
          component={OrphanageDetails}
          options={{ 
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato"/>
          }}
        />
        
        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{ 
            headerShown: true,
            header: () => <Header title="Selecione no mapa"/>
          }}
        />

        <Screen
          name="CreateOrphanage"
          component={CreateOrphanage}
          options={{ 
            headerShown: true,
            header: () => <Header title="Informe os dados"/>
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;