import { React, useState } from "react";
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  FlatList,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const IntroView = ({ title, description }) => {
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
        <Text style={introViewStyle.introDescription}>{description}</Text>
        <Text style={introViewStyle.introTitle}>{title}</Text>
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
    backgroundColor: "black",
  },
  backgroundImageContainer: {
    position: "absolute",
    top: -100,
    left: -40,
    opacity: 0.5,
    height: "150%",
  },
  introInfoContainer: {
    flexDirection: "column-reverse",
    padding: 10,
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
  introDescription: {
    color: "white",
  },
  introTitle: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
  },
});

const ScrollingTitleView = (props) => {
  const titleInfos = [];
  for (let i = 0; i < 6; i++) {
    const titleInfo = {
      title: "Naruto Shippuden",
      subDubText: "Sub | Dub",
      type: "Anime",
      key: i,
    };

    titleInfos[i] = titleInfo;
  }

  return (
    <View style={scrollingViewWithTitle.outerContainer}>
      <Text style={scrollingViewWithTitle.sectionText}>{props.section}</Text>
      <FlatList
        horizontal={true}
        data={titleInfos}
        renderItem={({ item }) => <TitleView {...item} />}
      />
    </View>
  );
};

const scrollingViewWithTitle = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: 400,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginBottom: 10,
    backgroundColor: "black",
  },
  sectionText: {
    paddingBottom: 5,
    paddingLeft: 2,
    color: "white",
    fontSize: 20,
  },
});

const scrollingViewWithTitleSmall = StyleSheet.create({
  outerContainer: {
    height: 200,
  },
});

const TitleView = ({ title, type, subDubText }) => {
  return (
    <View style={titleViewStyle.outerContainer}>
      <Image
        source={require("./Images/Naruto_Title_Card_Image.png")}
        resizeMode={"contain"}
      />
      <View style={titleViewStyle.bottonContainer}>
        <Text style={titleViewStyle.titleText}>{title}</Text>

        <View style={titleViewStyle.descriptionContainer}>
          <View style={titleViewStyle.description}>
            <Text style={titleViewStyle.type}>{type}</Text>
            <Text style={titleViewStyle.subDub}>• {subDubText}</Text>
          </View>

          <Feather name={"more-vertical"} size={20} color={"white"}></Feather>
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
  bottonContainer: {
    backgroundColor: "#263843",
    width: 145,
    justifyContent: "flex-start",
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  titleText: {
    paddingTop: 5,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 30,
    color: "white",
    fontSize: 12,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    color: "white",
    fontSize: 10,
    paddingLeft: 5,
  },
  type: {
    color: "#509D9f",
    fontSize: 12,
  },
  subDub: {
    color: "#A0A0A0",
    fontSize: 12,
  },
});

const ScrollingContinueView = () => {
  const continueTitleInfos = [];

  for (let i = 0; i < 6; i++) {
    const continueTitleInfo = {
      titleImage: "./Images/One_Piece_Continue_Watching_Thumbnail.jpeg",
      description: "S8 E620 - A Critical Situation! Punk...",
      remainingTime: "23m",
      title: "One Piece",
      key: i,
    };

    continueTitleInfos[i] = continueTitleInfo;
  }

  return (
    <View style={continueWatchingStyle.listContainer}>
      <FlatList
        horizontal={true}
        snapToInterval={369}
        declerationRate={"fast"}
        data={continueTitleInfos}
        renderItem={({ item }) => <ContinueWatchingView {...item} />}
      />
    </View>
  );
};

const continueWatchingStyle = StyleSheet.create({
  listContainer: {
    backgroundColor: "black",
    width: "100%",
    height: 200,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
  },
  outerContainer: {
    width: 360,
    marginLeft: 4,
    marginRight: 4,
  },
  backgroundImage: {
    width: "100%",
    opacity: 0.5,
    position: "absolute",
    top: 0,
    left: 0,
  },
  infoContainer: {
    width: "100%",
    padding: 12,
  },
});

const ContinueWatchingView = ({ title, description, remainingTime }) => {
  return (
    <View style={continueWatchingStyle.outerContainer}>
      <Image
        style={continueWatchingStyle.backgroundImage}
        source={require("./Images/One_Piece_Continue_Watching_Thumbnail.jpeg")}
        resizeMode={"cover"}
      />
      <View style={continueWatchingStyle.infoContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#b7b7b7", flex: 1 }}>{title}</Text>
          <Feather name={"more-vertical"} color={"white"} size={24}></Feather>
        </View>

        <View style={{ marginBottom: 80 }}>
          <Text style={{ color: "white", fontSize: 19 }}>{description}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
            <Entypo
              name={"controller-play"}
              size={30}
              color={"#ff893f"}
              style={{ marginLeft: -3 }}
            ></Entypo>
            <Text style={{ color: "#ff893f", fontSize: 12, marginLeft: 4 }}>
              CONTINUE WATCHING
            </Text>
          </View>

          <View backgroundColor={"rgba(0,0,0,0.5)"}>
            <Text style={{ color: "white", fontSize: 12, padding: 3 }}>
              {remainingTime} left
            </Text>
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

const ScrollingFromYourWatchlistView = () => {
  const watchListItems = [];

  for (let i = 0; i < 6; i++) {
    const watchListInfo = {
      description: "Continue: S1 E3",
      type: "Series",
      subDub: "Sub|Dub",
      title: "Aharen-san wa Hakarena",
      key: i,
    };
    watchListItems[i] = watchListInfo;
  }

  return (
    <View style={fromYourWatchListOuterContainer}>
      <Text style={scrollingViewWithTitle.sectionText}>
        {"From Your Watchlist".toUpperCase()}
      </Text>
      <FlatList
        horizontal={true}
        data={watchListItems}
        renderItem={({ item }) => <FromYourWatchListView {...item} />}
      />
    </View>
  );
};

const fromYourWatchListOuterContainer = StyleSheet.compose(
  scrollingViewWithTitle.outerContainer,
  scrollingViewWithTitleSmall.outerContainer
);

const FromYourWatchListView = ({ title, description, type, subDub }) => {
  return (
    <View style={fromYourWatchlistStyle.outerContainer}>
      <Image
        style={fromYourWatchlistStyle.upperImage}
        source={require("./Images/AharenSanWatchlist_image.jpeg")}
        resizeMode={"cover"}
      />
      <View style={fromYourWatchlistStyle.textContainer}>
        <View style={fromYourWatchlistStyle.upperTextContainer}>
          <Text style={fromYourWatchlistStyle.titleStyle}>{title}</Text>
          <Text style={fromYourWatchlistStyle.descriptionStyle}>
            {description}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={fromYourWatchlistStyle.type}>{type}</Text>
          <Text style={fromYourWatchlistStyle.subDub}>• {subDub}</Text>
        </View>
      </View>
    </View>
  );
};

const fromYourWatchlistStyle = StyleSheet.create({
  outerContainer: {
    width: 150,
    height: 150,
    marginLeft: 4,
    marginRight: 4,
  },
  upperImage: {
    width: "100%",
    height: "50%",
  },
  titleStyle: {
    color: "white",
    fontSize: 11,
  },
  descriptionStyle: {
    color: "white",
    fontSize: 10,
    marginTop: 5,
  },
  textContainer: {
    backgroundColor: "#263843",
    padding: 5,
  },
  upperTextContainer: {},
  type: {
    color: "#509D9f",
    fontSize: 10,
  },
  subDub: {
    color: "#A0A0A0",
    fontSize: 10,
    marginLeft: 5,
  },
});

const RecommendedView = ({ title, description, type, subDub }) => {
  return (
    <View style={recommnededViewStyle.outerContainer}>
      <Image
        style={recommnededViewStyle.upperImage}
        source={require("./Images/My_Hero_Recommended_Top_Image.jpeg")}
        resizeMode={"cover"}
      />
      {/* Bottom Area, flex row container */}
      <View style={recommnededViewStyle.bottomContainer}>
        <View
          style={{
            position: "absolute",
            top: -70,
            left: 15,
            shadowOffset: { width: -5, height: 5 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            backgroundColor: "black",
            height: 192,
            width: 128,
          }}
        >
          <Image
            style={recommnededViewStyle.bottomImage}
            source={require("./Images/My_Hero_Recommended_Bottom_Image.jpeg")}
            resizeMode={"cover"}
          />
        </View>

        {/* Column Container */}
        <View
          style={{ paddingRight: 5, marginLeft: 155, paddingTop: 10, flex: 1 }}
        >
          {/* title and description container */}
          <View style={recommnededViewStyle.informationContainer}>
            <Text style={recommnededViewStyle.title}>{title}</Text>
            <Text style={recommnededViewStyle.description}>{description}</Text>
          </View>

          {/* Row container for type-dub and button */}
          <View style={recommnededViewStyle.infoContainer}>
            <View style={recommnededViewStyle.additionalInfo}>
              <Text style={recommnededViewStyle.type}>{type}</Text>
              <Text style={recommnededViewStyle.subDub}>• {subDub}</Text>
            </View>
            <Feather name={"more-vertical"} size={20} color={"white"}></Feather>
          </View>
        </View>
      </View>
    </View>
  );
};

const recommnededViewStyle = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: 400,
    padding: 5,
    marginBottom: 20,
    backgroundColor: "black",
  },
  upperImage: { width: "100%", height: 200 },
  bottomContainer: {
    backgroundColor: "#263843",
    flexDirection: "row",
    width: "100%",
    paddingBottom: 10,
  },
  bottomImage: {
    width: 128,
    height: 192,
    position: "absolute",
    top: 0,
    left: 3,
  },
  informationContainer: { paddingBottom: 20 },
  title: { color: "white", marginBottom: 5 },
  infoContainer: { flexDirection: "row", alignItems: "center" },
  additionalInfo: { flex: 1, flexDirection: "row" },
  description: { color: "white" },
  type: {
    color: "#509D9f",
    fontSize: 10,
  },
  subDub: {
    color: "#A0A0A0",
    fontSize: 10,
    marginLeft: 5,
  },
});

//EXPORTS

const HomeTopView = function () {
  return (
    <View style={homeTopViewStyles.outerContainer}>
      <View style={homeTopViewStyles.innerLeftContainer}>
        <Image
          style={{ height: 30, width: 120 }}
          source={require("./Images/crunchyroll_icon.png")}
          resizeMode={"contain"}
        />
      </View>

      <View style={homeTopViewStyles.innerRightContainer}>
        <Feather
          style={homeTopViewStyles.innerRightIcon}
          name={"cast"}
          size={30}
        />
        <Feather
          style={homeTopViewStyles.innerRightIcon}
          name={"search"}
          size={30}
        />
      </View>
    </View>
  );
};

const homeTopViewStyles = StyleSheet.create({
  outerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    height: "13%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    borderBottomColor: "#E47D3A",
    borderBottomWidth: 2,

    backgroundColor: "black",
  },
  innerLeftContainer: {
    marginRight: "auto",
  },
  innerRightContainer: {
    marginLeft: "auto",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerRightIcon: {
    margin: 4,
    color: "white",
  },
});

const HomeMiddleView = () => {
  const introInfo = {
    descripton:
      "Around the end of the millennium, Viking, the mightiest but atrocious tibe, had been out breaking everywhere. Thorfinn, the son of the greatest warrior, lived his chil...",
    title: "VINLAND SAGA",
  };

  const recommendedInfo = {
    title: "My Hero Academia",
    description:
      "Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially...",
    type: "Series",
    subDub: "Subtitled",
  };

  const data = {
    introView: IntroView,
    ScrollingTitleView: ScrollingTitleView,
  };
  return (
    <ScrollView
      contentContainerStyle={homeMiddleViewStyles.outerContainer}
      indicatorStyle={"white"}
      bouncesZoom={"true"}
    >
      <IntroView {...introInfo}></IntroView>
      <ScrollingTitleView
        section={"Top Picks For You".toUpperCase()}
      ></ScrollingTitleView>
      <ScrollingContinueView></ScrollingContinueView>
      <ScrollingFromYourWatchlistView></ScrollingFromYourWatchlistView>
      <RecommendedView {...recommendedInfo}></RecommendedView>
    </ScrollView>
  );
};

const homeMiddleViewStyles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    backgroundColor: "black",
  },
});

const HomeView = () => {
  return (
    <View
      style={{
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <HomeTopView />
      <HomeMiddleView />
    </View>
  );
};

export { HomeView };
