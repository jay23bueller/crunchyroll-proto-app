import { useState } from "react";
import {
  View,
  SectionList,
  Image,
  Switch,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const AboutMeSectionView = () => {
  return (
    <View style={aboutMeStyle.outerContainer}>
      <Image
        source={require("./Images/Slime_Profile_Pic.png")}
        style={{ width: 100, height: 100, borderRadius: 50 }}
        resizeMode={"contain"}
      />

      <View style={{ justifyContent: "center", flex: 0.9, paddingLeft: 10 }}>
        <Text style={{ color: "white", textAlign: "left", fontSize: 15 }}>
          {"Japji Multani"}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="crown"
            size={13}
            color="orange"
            style={{ position: "relative", top: 1 }}
          />
          <Text style={{ color: "orange", fontSize: 13 }}>
            {"Premium Member"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const aboutMeStyle = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

function PressableAccountView({ link, title, currentValue, navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(link);
      }}
      style={pressableAccountStyle.outerContainer}
    >
      <Text style={{ color: "white", fontSize: 15, flex: 0.5 }}>{title}</Text>

      <View style={pressableAccountStyle.rightContainer}>
        {currentValue !== undefined && (
          <Text style={{ color: "white", fontSize: 11 }}>{currentValue}</Text>
        )}
        <Feather name={"chevron-right"} size={20} color={"white"} />
      </View>
    </Pressable>
  );
}

const pressableAccountStyle = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderBottomColor: "#282829",
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  rightContainer: {
    flexDirection: "row",
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

const SwitchableAccountView = ({ title, currentValue }) => {
  const [isEnabled, setIsEnabled] = useState(currentValue);

  return (
    <View style={switchableAccountStyle.outerContainer}>
      <Text style={{ color: "white", fontSize: 15, flex: 0.8 }}>{title}</Text>

      <View style={{ flex: 0.2, justifyContent: "flex-end" }}>
        <Switch
          style={switchableAccountStyle.switch}
          trackColor={{
            false: "#59595B",
            true: "#5DBABA",
          }}
          ios_backgroundColor={"#59595B"}
          thumbColor={"white"}
          onValueChange={() => setIsEnabled(!isEnabled)}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const switchableAccountStyle = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderBottomColor: "#282829",
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  switch: { transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] },
});

const SectionHeaderView = ({ title }) => {
  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        paddingLeft: 5,
        paddingTop: 10,
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          color: "#9c9c9c",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

function SectionDataItem(title, link, type, currentValue) {
  this.title = title;
  this.link = link;
  this.type = type;
  this.currentValue = currentValue;
  this.dataRenderer = function (navigation) {
    if (this.type === "stack") {
      return (
        <PressableAccountView
          title={this.title}
          currentValue={this.currentValue}
          navigation={navigation}
          link={link}
        />
      );
    } else {
      return (
        <SwitchableAccountView
          title={this.title}
          currentValue={this.currentValue}
        />
      );
    }
  };
}

function SectionInfo(title, data) {
  this.title = title;
  this.sectionHeaderRenderer = function () {
    if (this.title !== "About Me") {
      return <SectionHeaderView title={this.title} />;
    } else {
      return <AboutMeSectionView />;
    }
  };
  this.data = data;
}

const accountSections = [
  new SectionInfo("About Me", [
    new SectionDataItem("Membership Plan", "About", "stack", undefined),
    new SectionDataItem(
      "Change Email",
      "About",
      "stack",
      "jsmultani794@gmail.com"
    ),
    new SectionDataItem("Change Password", "About", "stack", undefined),
  ]),

  new SectionInfo("Preferences", [
    new SectionDataItem("Audio Language", "About", "stack", "Japanese"),
    new SectionDataItem("Subtitles/CC Language", "About", "stack", "English"),
    new SectionDataItem("Change Password", undefined, "switch", true),
  ]),
  new SectionInfo("App Experience", [
    new SectionDataItem("Show Mature Content", undefined, "switch", true),
    new SectionDataItem(
      "Stream Using Cellular Data",
      undefined,
      "switch",
      false
    ),
    new SectionDataItem("Notifications", "About", "stack", undefined),
  ]),
  new SectionInfo("Privacy", [
    new SectionDataItem(
      "Do not sell my personal information",
      "About",
      "stack",
      undefined
    ),
    new SectionDataItem("Delete My Account", "About", "stack", undefined),
  ]),
  new SectionInfo("About", [
    new SectionDataItem("Need Help?", "About", "stack", undefined),
    new SectionDataItem("Log Out", "About", "stack", undefined),
  ]),
];

const AccountMainView = ({ navigation }) => {
  return (
    <SectionList
      contentContainerStyle={{
        alignItems: "center",
        width: Dimensions.get("screen").width,
        backgroundColor: "black",
      }}
      renderSectionHeader={({ section }) => section.sectionHeaderRenderer()}
      sections={accountSections}
      renderItem={({ item }) => item.dataRenderer(navigation)}
      stickySectionHeadersEnabled={false}
    />
  );
};

const AboutView = ({ navigation }) => {
  return (
    <View style={aboutViewStyle.outerContainer}>
      <Image
        source={require("./Images/Empty_CrunchyList_Image.png")}
        style={{ width: 166, height: 202 }}
      />
      <View style={{ paddingTop: 20, paddingBottom: 40 }}>
        <Text style={aboutViewStyle.description}>Stack Test</Text>
        <Text style={aboutViewStyle.description}>Hello! Testing!</Text>
      </View>
      <TouchableOpacity
        style={aboutViewStyle.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ textAlign: "center" }}>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const aboutViewStyle = StyleSheet.create({
  outerContainer: {
    width: Dimensions.get("window").width,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "black",
  },
  description: { color: "white", textAlign: "center" },
  button: {
    color: "black",
    backgroundColor: "#ff893f",
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
});

const Stack = createStackNavigator();

const AccountView = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "black" },
        }}
        initialRouteName={"Account"}
        initialLayout={{
          width: Dimensions.get("screen").width,
          height: "100%",
        }}
      >
        <Stack.Screen name="Account" component={AccountMainView} />
        <Stack.Screen name="About" component={AboutView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AccountView };
