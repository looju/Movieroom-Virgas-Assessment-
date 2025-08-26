import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export function Tabs(){
const Tab = createBottomTabNavigator();  

 return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'To-Do') {
            iconName = 'book';
            size = focused ? 25 : 20;
            color = 'white';
          } else if (route.name === 'Done') {
            iconName = 'checkmark-done-outline';
            size = focused ? 25 : 20;
            color = 'white';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveBackgroundColor: 'purple',
        tabBarInactiveBackgroundColor: 'grey',
        tabBarLabelStyle: {color: 'white'},
      })}>
      <Tab.Screen
        name={'To-Do'}
        component={Todo}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Done'}
        component={Done}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}