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
    top: -100,
    left: -40,
    opacity: .5,
    height: "150%",
  },
  introInfoContainer: {
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
    <View style={scrollingViewWithTitle.outerContainer}>
      <Text style={scrollingViewWithTitle.sectionText}>{props.section}</Text>
      <ScrollView horizontal={true}>
        <TitleView
          title={
            "Naruto Shippuden test text to check if the text will wrap around within the defined space or not"
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

const scrollingViewWithTitle = StyleSheet.create({
  outerContainer: {
    width: "100%",
    height: 400,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginBottom:10,
    backgroundColor: "black",
  },
  sectionText: {
    paddingBottom: 5,
    paddingLeft: 2,
    color: "white",
    fontSize: 20
  },
});

const scrollingViewWithTitleSmall = StyleSheet.create({
  outerContainer: {
    height: 200
  }
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

        <View style={{ flexDirection: "row", alignItems: 'center', paddingBottom: 10 }}>
          <View style={titleViewStyle.description}>
            <Text style={titleViewStyle.type}>{props.type}</Text>
            <Text style={titleViewStyle.subDub}>• {props.subDubText}</Text>
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
        <ContinueWatchingView
          titleImage={"./Images/One_Piece_Continue_Watching_Thumbnail.jpeg"}
          description={'S8 E620 - A Critical Situation! Punk...'}
          remainingTime={'23m'}
          title={'One Piece'}
        ></ContinueWatchingView>
        <ContinueWatchingView
          titleImage={"./Images/One_Piece_Continue_Watching_Thumbnail.jpeg"}
          description={'S8 E620 - A Critical Situation! Punk...'}
          remainingTime={'23m'}
          title={'One Piece'}
        ></ContinueWatchingView>
                <ContinueWatchingView
          titleImage={"./Images/One_Piece_Continue_Watching_Thumbnail.jpeg"}
          description={'S8 E620 - A Critical Situation! Punk...'}
          remainingTime={'23m'}
          title={'One Piece'}
        ></ContinueWatchingView>
                <ContinueWatchingView
          titleImage={"./Images/One_Piece_Continue_Watching_Thumbnail.jpeg"}
          description={'S8 E620 - A Critical Situation! Punk...'}
          remainingTime={'23m'}
          title={'One Piece'}
        ></ContinueWatchingView>
                <ContinueWatchingView
          titleImage={"./Images/One_Piece_Continue_Watching_Thumbnail.jpeg"}
          description={'S8 E620 - A Critical Situation! Punk...'}
          remainingTime={'23m'}
          title={'One Piece'}
        ></ContinueWatchingView>
                <ContinueWatchingView
          titleImage={"./Images/One_Piece_Continue_Watching_Thumbnail.jpeg"}
          description={'S8 E620 - A Critical Situation! Punk...'}
          remainingTime={'23m'}
          title={'One Piece'}
        ></ContinueWatchingView>

      </ScrollView>
    </View>
  );
};

const ContinueWatchingView = (props) => {

  console.log(props.titleImage);
  return (
    <View style={{ width: 360, marginLeft: 4, marginRight: 4 }}>
      <Image
        style={{
          width: "100%",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        source={require('./Images/One_Piece_Continue_Watching_Thumbnail.jpeg')}
        resizeMode={"cover"}
      />
      <View style={{ width: "100%", padding: 12 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#b7b7b7", flex: 1 }}>{props.title}</Text>
          <Feather name={"more-vertical"} color={"white"} size={24}></Feather>
        </View>

        <View style={{ marginBottom: 80 }}>
          <Text style={{ color: "white", fontSize: 19 }}>
            {props.description}
          </Text>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <Entypo name={'controller-play'} size={30} color={'#ff893f'} style={{ marginLeft: -3 }}></Entypo>
            <Text style={{ color: '#ff893f', fontSize: 12, marginLeft: 4 }}>CONTINUE WATCHING</Text>
          </View>

          <View backgroundColor={'rgba(0,0,0,0.5)'}>
            <Text style={{ color: 'white', fontSize: 12, padding: 3 }}>{props.remainingTime} left</Text>
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

const ScrollingFromYourWatchlistView = () =>
{
  return(
    <View style={fromYourWatchListOuterContainer}>
      <Text style={scrollingViewWithTitle.sectionText}>{("From Your Watchlist").toUpperCase()}</Text>
      <ScrollView horizontal={true}>
      <FromYourWatchListView></FromYourWatchListView>
      <FromYourWatchListView></FromYourWatchListView>
      <FromYourWatchListView></FromYourWatchListView>
      <FromYourWatchListView></FromYourWatchListView>
      <FromYourWatchListView></FromYourWatchListView>
      <FromYourWatchListView></FromYourWatchListView>
      </ScrollView>
      
    </View>
  )
};

const fromYourWatchListOuterContainer = StyleSheet.compose(scrollingViewWithTitle.outerContainer, scrollingViewWithTitleSmall.outerContainer);

const FromYourWatchListView = () =>
{
  return(
    <View style={fromYourWatchlistStyle.outerContainer}>
      <Image style={fromYourWatchlistStyle.upperImage} source={require('./Images/AharenSanWatchlist_image.jpeg')} resizeMode={'cover'}/>
      <View style={fromYourWatchlistStyle.textContainer}>
        <View style={fromYourWatchlistStyle.upperTextContainer}>
        <Text style={fromYourWatchlistStyle.titleStyle}>Aharen-san wa Hakarena</Text>
        <Text style={fromYourWatchlistStyle.descriptionStyle}>Continue: S1 E3</Text>
        </View>

        <View style={{flexDirection:'row', marginTop: 5}}>
          <Text style={fromYourWatchlistStyle.type}>Series</Text>
          <Text style={fromYourWatchlistStyle.subDub}>•  Sub|Dub</Text>
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
    marginRight: 4
  },
  upperImage: {
    width: '100%',
    height: '50%'
  },
  titleStyle: {
    color: 'white',
    fontSize: 11
  },
  descriptionStyle: {
    color: 'white',
    fontSize: 10,
    marginTop: 5
  },
  textContainer: {
    backgroundColor: '#263843',
    padding: 5
  },
  upperTextContainer: {

  },
  type: {
    color: "#509D9f",
    fontSize: 10,

  },
  subDub: {
    color: "#A0A0A0",
    fontSize: 10,
    marginLeft: 5
  },
});


export { IntroView, ScrollingTitleView, TitleView, ScrollingContinueView, ScrollingFromYourWatchlistView, FromYourWatchListView };
