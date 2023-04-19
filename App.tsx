import { NavigationContainer } from '@react-navigation/native';
import { PageTypes, RootStackParamList } from './common/types';
import QuotesScreen from './screens/QuotesScreen/QuotesScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={{ marginTop: 50 }}>
        <Tab.Screen
          name={PageTypes.QUOTES}
          component={QuotesScreen}
          options={{ title: 'Котировки', swipeEnabled: false }}
        />
        <Tab.Screen
          name={PageTypes.ABOUT}
          component={AboutScreen}
          options={{ title: 'О приложении' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
