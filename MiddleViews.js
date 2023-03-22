import { React } from "react";
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
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
    <View style={scrollingTitleViewStyle.outerContainer}>
      <Text style={scrollingTitleViewStyle.sectionText}>{props.section}</Text>
      <ScrollView horizontal={true}>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
        <TitleView
          title={"Naruto Shippuden"}
          type={"Anime"}
          subDubText={"Sub | Dub"}
        ></TitleView>
      </ScrollView>
    </View>
  );
};

const scrollingTitleViewStyle = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: 400,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: "black",
  },
  sectionText: {
    paddingBottom: 5,
    paddingLeft: 2,
    color: "white",
  },
});

const TitleView = (props) => {
  return (
    <View style={titleViewStyle.outerContainer}>
      <Image
        source={require("./Images/Naruto_Title_Card_Image.png")}
        resizeMode={"contain"}
      />
      <View style={{ backgroundColor: "#263843" }}>
        <Text style={titleViewStyle.titleText}>{props.title}</Text>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={titleViewStyle.description}>
            <Text style={titleViewStyle.type}>{props.type}</Text>
            <Text style={titleViewStyle.subDub}>• {props.subDubText}</Text>
          </View>

          <Feather name={"more-vertical"} size={12} color={"white"}></Feather>
        </View>
      </View>
    </View>
  );
};

const titleViewStyle = StyleSheet.create({
  outerContainer: {
    marginLeft: 2,
    marginRight: 2,
  },
  titleImage: {},
  titleText: {
    paddingTop: 5,
    paddingLeft: 7,
    paddingBottom: 30,
    color: "white",
    fontSize: 10,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    flex: "1",
    color: "white",
    fontSize: 10,
    paddingLeft: 5,
    paddingBottom: 6,
  },
  type: {
    color: "#509D9f",
    fontSize: 10,
  },
  subDub: {
    color: "#A0A0A0",
    fontSize: 10,
  },
});

export { IntroView, ScrollingTitleView, TitleView };
