import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { HomeView } from "./HomeViews";
import { MyListView } from "./MyListViews";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LogBox } from "react-native";
import { AccountView } from "./AccountViews";
import "react-native-gesture-handler";

LogBox.ignoreLogs([
  "Sending `onAnimatedValueUpdate` with no listeners registered.",
]);

const routeToIconNameMapping = {
  Home: "home",
  "My Lists": "bookmark",
  Browse: "grid",
  Simulcasts: "tv",
  Account: "smile",
};

const BottomView = ({ state, navigation }) => {
  return (
    <View style={bottomViewStyles.outerContainer}>
      {state.routes.map((route, index) => {
        const label = route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <BottomItem
            key={route.key}
            iconName={routeToIconNameMapping[route.name]}
            focused={isFocused}
            pressEvent={onPress}
            description={label}
          />
        );
      })}
    </View>
  );
};

const BottomItem = (props) => {
  return (
    <Pressable style={bottomViewStyles.bottomElem} onPress={props.pressEvent}>
      <Feather
        name={props.iconName}
        size={25}
        color={props.focused ? "#E47D3A" : "white"}
      />
      <Text style={bottomViewStyles.bottomElemText}> {props.description}</Text>
    </Pressable>
  );
};

const bottomViewStyles = StyleSheet.create({
  outerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#23252A",
    width: "100%",
    height: "10%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    alignItems: "flex-start",
  },
  bottomElem: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: 55,
  },
  bottomElemText: { fontSize: 9, marginTop: 5, color: "white" },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initalRouteName={"Home"}
        screenOptions={{
          headerTitleStyle: { color: "white" },
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "#E47D3A",
            borderBottomWidth: 2,
            shadowOpacity: 0,
          },
        }}
        tabBar={(props) => <BottomView {...props} />}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeView}
        />
        <Tab.Screen name="My Lists" component={MyListView} />
        <Tab.Screen name="Account" component={AccountView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
