import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonIcons from 'react-native-vector-icons/IonIcons';
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import WatchList from "../Screens/WatchList";
import { useWatchlistStore } from "../Store/Store";
import { Colors, images } from "../Constants/Constants";
import { Image, Text, View } from "react-native";

export function Tabs(){

interface TabBarIconProps {
  name: string;
  focused: boolean;
  icon: any;
}

const Tab = createBottomTabNavigator();  
  const dark = useWatchlistStore((state) => state?.darkTheme);


  const TabBarIcon = ({ name, focused, icon }: TabBarIconProps) => {
  if (focused) {
    return (
      <View className="flex flex-col gap-1 min-w-28 min-h-full items-center justify-center mt-12">
        <Image
          source={icon}
          tintColor={focused ? "#0296E5" : "#67686D"}
          className="w-6 h-6"
          resizeMode="contain"
        />
        <Text className="text-primary text-sm font-poppins-medium">{name}</Text>
      </View>
    )}
  }
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
        name={'Home'}
        component={Home}
        options={{headerShown: false,tabBarIcon: ({ focused }) => (
            <TabBarIcon name="Home" icon={images.HomeBar} focused={focused} />
          )}}
        
      />
    <Tab.Screen
        name={'Search'}
        component={Search}
          options={{headerShown: false,tabBarIcon: ({ focused }) => (
            <TabBarIcon name="Search" icon={images.search} focused={focused} />
          )}}
      />
      <Tab.Screen
        name={'Watchlist'}
        component={WatchList}
          options={{headerShown: false,tabBarIcon: ({ focused }) => (
            <TabBarIcon name="Watchlist" icon={images.watchList} focused={focused} />
          )}}
      />
    </Tab.Navigator>
  );
}