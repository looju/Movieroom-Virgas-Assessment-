import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from 'react-native-vector-icons/IonIcons';
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import WatchList from "../Screens/WatchList";

export function Tabs(){
const Tab = createBottomTabNavigator();  
  const dark = useWatchlistStore((state) => state?.darkTheme);
 return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginHorizontal: 0,
          height: 80,
          position: "absolute",
          bottom: 20,
          backgroundColor: dark ? Colors.darkSilver : Colors.whiteSilver,
          elevation: 5,
          borderTopColor: "#0296E5",
        },
      }}
     >
      <Tab.Screen
        name={'home'}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Search'}
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Watchlist'}
        component={WatchList}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}