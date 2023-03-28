import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const CrunchyListView = () => {
  return (
    <View style={crunchyListViewStyle.outerContainer}>
      <Image
        source={require("./Images/Empty_CrunchyList_Image.png")}
        style={{ width: 166, height: 202 }}
      />
      <View style={{ paddingTop: 20, paddingBottom: 40 }}>
        <Text style={crunchyListViewStyle.description}>
          You don't have any Crunchylists yet.
        </Text>
        <Text style={crunchyListViewStyle.description}>Let's create one!</Text>
      </View>
      <TouchableOpacity style={crunchyListViewStyle.button}>
        <Text style={{ textAlign: "center" }}>CREATE NEW LIST</Text>
      </TouchableOpacity>
    </View>
  );
};

const crunchyListViewStyle = StyleSheet.create({
  outerContainer: {
    width: Dimensions.get("window").width,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: "black",
  },
  button: {
    color: "black",
    backgroundColor: "#ff893f",
    width: "100%",
    height: 50,
    justifyContent: "center",
  },
  description: {
    textAlign: "center",
    color: "white",
  },
});

const HistoryView = () => {
  const historyItems = [];

  for (let i = 0; i < 20; i++) {
    const historyItem = {
      title: "One Piece",
      description: "S9 E642 - The Stratagem of the Cent...",
      type: "Episode",
      subDub: "Subtitled",
    };
    historyItems[i] = historyItem;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <FlatList
        contentContainerStyle={{
          width: Dimensions.get("window").width,
          backgroundColor: "black",
        }}
        numColumns={2}
        data={historyItems}
        renderItem={({ item }) => <HistoryItemView {...item} />}
      />
    </SafeAreaView>
  );
};

const HistoryItemView = ({ title, description, type, subDub }) => {
  return (
    <View
      style={{
        width: Dimensions.get("window").width * 0.5,
        padding: 5,
        alignItems: "center",
      }}
    >
      <Image
        source={require("./Images/One_Piece_History_Item.jpeg")}
        style={{ width: 160, height: 88.5 }}
        resizeMode={"contain"}
      />
      <View style={{ backgroundColor: "#263843", width: 160, padding: 5 }}>
        <View style={{ paddingBottom: 5 }}>
          <Text style={{ color: "white", fontSize: 10 }}>{title}</Text>
          <Text style={{ color: "white", fontSize: 12 }}>{description}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              flex: 0.8,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#509D9f", flex: 0.38, fontSize: 10 }}>
              {type}
            </Text>
            <Text style={{ color: "#A0A0A0", flex: 0.62, fontSize: 10 }}>
              • {subDub}
            </Text>
          </View>
          <View
            style={{
              flex: 0.2,
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Feather name={"more-vertical"} color={"white"} size={20}></Feather>
          </View>
        </View>
      </View>
    </View>
  );
};

const OfflineView = () => {
  return (
    <View style={offlineViewStyle.outerContainer}>
      <Image
        source={require("./Images/Offline_Viewing_Image.png")}
        style={{ width: 177.1, height: 140 }}
        resizeMode={"contain"}
      />
      <View style={{ paddingTop: 20, paddingBottom: 40 }}>
        <Text style={offlineViewStyle.description}>
          Sync your favorite shows to watch offline
        </Text>
        <Text style={offlineViewStyle.description}>
          Upgrade to Mega Fan to use this feature
        </Text>
      </View>
      <TouchableOpacity style={offlineViewStyle.button}>
        <MaterialCommunityIcons
          name={"crown-outline"}
          color={"black"}
          size={29}
        />
        <Text style={{ textAlign: "center" }}>UPGRADE NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

const offlineViewStyle = StyleSheet.create({
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
    flexDirection: "row",
    alignItems: "center",
  },
});

const WatchListHeader = () => {
  return (
    <View style={watchListHeaderStyle.outerContainer}>
      <Text style={{ color: "white", flex: 1 }}>Recent Activity</Text>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons name={"sort"} size={24} color={"white"}></MaterialIcons>
        <Ionicons
          name={"ios-options-outline"}
          size={24}
          color={"white"}
        ></Ionicons>
      </View>
    </View>
  );
};

const watchListHeaderStyle = StyleSheet.create({
  outerContainer: {
    width: 350,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "black",
    alignItems: "center",
  },
});

const WatchListView = () => {
  const watchListViewComponents = [];
  for (let i = 0; i < 30; i++) {
    const watchListItem = {
      title: "One Piece",
      description: "Continue: S9 E643",
      type: "Series",
      subDub: "Sub | Dub",
    };
    watchListViewComponents[i] = watchListItem;
  }

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <FlatList
        contentContainerStyle={{
          alignItems: "center",
          width: Dimensions.get("window").width,
          backgroundColor: "black",
        }}
        data={watchListViewComponents}
        renderItem={({ item }) => <WatchListItemView {...item} />}
        ListHeaderComponent={<WatchListHeader />}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        windowSize={3}
      />
    </SafeAreaView>
  );
};

const WatchListItemView = ({ title, description, type, subDub }) => {
  return (
    <View style={watchListItemStyle.outerContainer}>
      <Image
        source={require("./Images/One_Piece_History_Thumbnail.jpeg")}
        style={{ width: 64, height: 96 }}
      ></Image>
      <View style={{ padding: 10, backgroundColor: "#263843", flex: 1 }}>
        <View>
          <Text style={{ color: "white" }}>{title}</Text>
          <Text style={{ color: "#B5B9BB", paddingTop: 5, paddingBottom: 16 }}>
            {description}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flexDirection: "row", flex: 0.6 }}>
            <Text style={{ color: "#509D9f" }}>{type}</Text>
            <Text style={{ color: "#A0A0A0" }}>• {subDub}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              flex: 0.4,
            }}
          >
            <Feather name={"heart"} color={"white"} size={20}></Feather>
            <Feather name={"more-vertical"} color={"white"} size={20}></Feather>
          </View>
        </View>
      </View>
    </View>
  );
};

const watchListItemStyle = StyleSheet.create({
  outerContainer: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
  },
});

const ListTab = createMaterialTopTabNavigator();

const MyListView = () => {
  return (
    <NavigationContainer independent={true}>
      <ListTab.Navigator
        style={{ backgroundColor: "black" }}
        initialRouteName={"Watchlist"}
        initialLayout={{
          width: Dimensions.get("screen").width,
          height: "100%",
        }}
        screenOptions={myListViewTabStyle}
      >
        <ListTab.Screen name="Watchlist" component={WatchListView} />
        <ListTab.Screen name="History" component={HistoryView} />
        <ListTab.Screen name="Crunchy Lists" component={CrunchyListView} />

        <ListTab.Screen name="Offline" component={OfflineView} />
      </ListTab.Navigator>
    </NavigationContainer>
  );
};

const myListViewTabStyle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "black",
  },
  tabBarLabelStyle: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
  tabBarContentContainerStyle: {
    width: Dimensions.get("window").width,
    padding: 4,
  },
  tabBarItemStyle: {
    width: Dimensions.get("window").width * 0.25,
    padding: 4,
  },
  tabBarIndicatorContainerStyle: {
    backgroundColor: "black",
  },
  tabBarIndicatorStyle: {
    backgroundColor: "#E47D3A",
  },
});

export { MyListView };
