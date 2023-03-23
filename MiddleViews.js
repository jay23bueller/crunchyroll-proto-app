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
import { Feather, Entypo } from "@expo/vector-icons";

const IntroView = (props) => {
  return (
    <View style={introViewStyle.outerContainer}>
      <Image
        style={introViewStyle.backgroundImageContainer}
        source={require("./Images/Vinland_Saga_Background.png")}
        resizeMode={"cover"}
      />
      <View style={introViewStyle.introInfoContainer}>
      <TouchableOpacity style={introViewStyle.watchNowButton}>
          <Feather name="play" size={20}></Feather>
          <Text style={{ fontSize: 18 }}>WATCH NOW</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" }}>{props.description}</Text>
        <Text style={{ color: "white", fontSize: 24, marginBottom: 10 }}>
          {props.title}
        </Text>
      </View>

    </View>
  );
};

const introViewStyle = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: 500,
    display: "flex",
    flexDirection: "column-reverse",
    backgroundColor: 'black',
  },
  backgroundImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: .5,
    height: "100%",
  },
  introInfoContainer:{
    flexDirection: 'column-reverse',
    padding: 10
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
          title={
            "Naruto Shippuden on the dead homies ya heard with the fourty four wowaiofejoa waifojeioafj"
          }
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
      <View
        style={{
          backgroundColor: "#263843",
          width: 145,
          justifyContent: "flex-start",
        }}
      >
        <Text style={titleViewStyle.titleText}>{props.title}</Text>

        <View style={{ flexDirection: "row" }}>
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
  titleText: {
    paddingTop: 5,
    paddingLeft: 7,
    paddingRight: 7,
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

const ScrollingContinueView = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        width: "100%",
        height: 200,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
      }}
    >
      <ScrollView horizontal={true}>
        <ContinueWatchingView></ContinueWatchingView>
        <ContinueWatchingView></ContinueWatchingView>
        <ContinueWatchingView></ContinueWatchingView>
        <ContinueWatchingView></ContinueWatchingView>
        <ContinueWatchingView></ContinueWatchingView>
        <ContinueWatchingView></ContinueWatchingView>
        <ContinueWatchingView></ContinueWatchingView>
      </ScrollView>
    </View>
  );
};

const ContinueWatchingView = () => {
  return (
    <View style={{ width: 360, marginLeft:4, marginRight:4 }}>
      <Image
        style={{
          width: "100%",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        source={require("./Images/One_Piece_Continue_Watching_Thumbnail.jpeg")}
        resizeMode={"cover"}
      />
      <View style={{ width: "100%", padding: 12 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#b7b7b7", flex: "1" }}>One Piece</Text>
          <Feather name={"more-vertical"} color={"white"} size={24}></Feather>
        </View>

        <View style={{marginBottom: 80}}>
          <Text style={{ color: "white", fontSize: 19 }}>
            S8 E620 - A Critical Situation! Punk...
          </Text>
        </View>

        
          <View style={{flexDirection:'row', alignItems: 'center'}}>
            <View style={{flexDirection:'row', alignItems: 'center', flex:1}}>
            <Entypo name={'controller-play'} size={30} color={'#ff893f'} style={{marginLeft:-3}}></Entypo>
            <Text style={{color: '#ff893f', fontSize:12, marginLeft: 4}}>CONTINUE WATCHING</Text>
            </View>

            <View backgroundColor={'rgba(0,0,0,0.5)'}>
              <Text style={{color:'white', fontSize:12, padding:3}}>23m left</Text>
            </View>
          </View>

          <View>
            <Text></Text>
          </View>
        
        <View></View>
      </View>
    </View>
  );
};

export { IntroView, ScrollingTitleView, TitleView, ScrollingContinueView };
