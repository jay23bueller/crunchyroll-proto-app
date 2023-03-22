import { React } from "react";
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const IntroView = (props) => {
  return (
    <View style={introViewStyle.outerContainer}>
      <ImageBackground
        style={introViewStyle.backgroundImageContainer}
        source={require("./Images/Vinland_Saga_Background.png")}
        resizeMode={"cover"}
      >
        <TouchableOpacity style={introViewStyle.watchNowButton}>
          <Feather name="play" size={20}></Feather>
          <Text style={{ fontSize: 18 }}>WATCH NOW</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>{props.description}</Text>
        <Text style={{ color: "white", fontSize: 24, marginBottom: 10 }}>
          {props.title}
        </Text>
      </ImageBackground>
    </View>
  );
};

const introViewStyle = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: 500,
    display: "flex",
    flexDirection: "column-reverse",
  },
  backgroundImageContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    height: "100%",
  },
  watchNowButton: {
    backgroundColor: "#E47D3A",
    color: "white",
    width: 160,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginTop: 10,
  },
});

const ScrollingTitleView = (props) => {
  return (
    <View>
      <Text>{props.section}</Text>
      <ScrollView horizontal={true}></ScrollView>
    </View>
  );
};

const TitleView = (props) => {
  return (
    <View>
      <Image />
      <View>
        <Text></Text>
        <View>
          <Text></Text>
          <Button title={"val"}></Button>
        </View>
      </View>
    </View>
  );
};

export { IntroView, ScrollingTitleView, TitleView };
