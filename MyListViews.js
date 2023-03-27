import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, ScrollView, Image, FlatList, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native';
import {Feather, MaterialIcons, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';


const CrunchyListView = () =>
{
    return(
        <View style={{width: Dimensions.get('window').width, height:'100%', justifyContent:'center', alignItems:'center', paddingLeft: 5, paddingRight:5,backgroundColor:'black'}}>
            <Image source={require('./Images/Empty_CrunchyList_Image.png')} style={{width:166, height: 202}} />
            <View style={{paddingTop: 20, paddingBottom: 40}}>
            <Text style={{color:'white', textAlign:'center'}}>You don't have any Crunchylists yet.</Text>
            <Text style={{color:'white', textAlign:'center'}}>Let's create one!</Text>
            </View>
            <TouchableOpacity style={{color:'black',backgroundColor:'#ff893f', width:'100%', height:50, justifyContent:'center'}}>
                <Text style={{textAlign:'center'}}>CREATE NEW LIST</Text>
            </TouchableOpacity>
        </View>
    );
}

const HistoryView = () =>
{
    const historyItems = [];

    for(let i = 0; i < 20; i++)
    {
        historyItems[i] = i;
    }

    return(
        <SafeAreaView style={{backgroundColor:'black'}}>
            <FlatList  
                contentContainerStyle={{width: Dimensions.get('window').width,backgroundColor:'black'}}
                numColumns={2}
                data={historyItems}
                renderItem={(item) => <HistoryItemView key={item}/>}
            />
        </SafeAreaView>

            
    )
}

const HistoryItemView = () =>
{
    return(
        <View style={{width: Dimensions.get('window').width*0.5, padding:5, alignItems:'center' }}>
            <Image source={require('./Images/One_Piece_History_Item.jpeg')} style={{width:160, height:88.5}} resizeMode={'contain'}></Image>
            <View style={{backgroundColor:'#263843', width: 160, padding:5}}>
                <View style={{paddingBottom:5}}>
                    <Text style={{color:'white', fontSize:10}}>One Piece</Text>
                    <Text style={{color:'white', fontSize:12}}>S9 E642 - The Stratagem of the Cent...</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', flex:0.8, justifyContent:'space-between'}}>
                        <Text style={{color:'#509D9f', flex:0.38, fontSize:10}}>Episode</Text>
                        <Text style={{color:'#A0A0A0', flex:0.62, fontSize:10}}>•  Subtitled</Text>
                    </View>
                    <View style={{flex:.2, flexDirection:'row', justifyContent:'flex-end'}}>
                    <Feather  name={'more-vertical'} color={'white'} size={20}></Feather>
                    </View>
                   
                </View>
            </View>
        </View>
    )
}

const OfflineView = () =>
{
    return(
        <View style={{width: Dimensions.get('window').width, height:'100%', justifyContent:'center', alignItems:'center', paddingLeft: 5, paddingRight:5,backgroundColor:'black'}}>
            <Image source={require('./Images/Offline_Viewing_Image.png')} style={{width:177.1, height: 140}} resizeMode={'contain'}/>
            <View style={{paddingTop: 20, paddingBottom: 40}}>
            <Text style={{color:'white', textAlign:'center'}}>Sync your favorite shows to watch offline</Text>
            <Text style={{color:'white', textAlign:'center'}}>Upgrade to Mega Fan to use this feature</Text>
            </View>
            <TouchableOpacity style={{color:'black',backgroundColor:'#ff893f', width:'100%', height:50, justifyContent:'center',flexDirection:'row', alignItems:'center'}}>
                <MaterialCommunityIcons name={'crown-outline'} color={'black'} size={29}/>
                <Text style={{textAlign:'center'}}>UPGRADE NOW</Text>
            </TouchableOpacity>
        </View>
    );
}


const WatchListHeader = () =>{
    return(
        <View style={{width:350, flexDirection:'row', padding:10, backgroundColor:'black', alignItems:'center'}}>
            <Text style={{color:'white', flex:1}}>Recent Activity</Text>
            <View style={{flexDirection:'row'}}>
                <MaterialIcons name={'sort'} size={24} color={'white'}></MaterialIcons>
                <Ionicons name={'ios-options-outline'} size={24} color={'white'}></Ionicons>
            </View>
        </View>
    )
}

const WatchListView = () =>
{
    const watchListViewComponents = [];
    for(let i = 0; i < 30; i++)
    {
        watchListViewComponents[i] = i;
    }

    return(
        <SafeAreaView style={{backgroundColor:'black'}}>
        <FlatList
            contentContainerStyle={{alignItems:'center', width: Dimensions.get('window').width, backgroundColor:'black'}}
            data={watchListViewComponents}
            renderItem={item => <WatchListItemView key={item}/>}
            ListHeaderComponent={<WatchListHeader/>}
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll={true}
            windowSize={3}
            
        />
        </SafeAreaView>

    )
}

const WatchListItemView = () =>
{
    return(
        <View style={{width:'100%', paddingLeft: 15, paddingRight:15, paddingTop:5,paddingBottom:5, flexDirection:'row'}}>
            <Image source={require('./Images/One_Piece_History_Thumbnail.jpeg')} style={{width: 64, height:96}}></Image>
            <View style={{padding:10, backgroundColor: '#263843', flex:1}}>
                <View>
                    <Text style={{color:'white'}}>One Piece</Text>
                    <Text style={{color:'#B5B9BB',paddingTop:5, paddingBottom:16}}>Continue: S9 E643</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <View style={{flexDirection:'row', flex:.6}}>
                        <Text style={{color: '#509D9f'}}>Series</Text>
                        <Text style={{color:'#A0A0A0'}}>• Sub | Dub</Text>
                    </View>


                    <View style={{flexDirection: 'row', justifyContent:'flex-end', flex:.4}}>
                        <Feather name={'heart'} color={'white'} size={20}></Feather>
                        <Feather name={'more-vertical'} color={'white'} size={20}></Feather>
                    </View>
                </View>

            </View>
        </View>
    )
}

const ListTab = createMaterialTopTabNavigator();

const MyListView = () =>
{

  return(
    // <View style={{ height:'100%', width:'100%', backgroundColor: 'black'}}>
    //   <MyListTopView/>
    //   <MyListMiddleView/>
    // </View>
    <NavigationContainer independent={true} >
        <ListTab.Navigator 
            style={{backgroundColor:'black'}}
            initialRouteName={"Watchlist"} 
            initialLayout={{width:Dimensions.get('screen').width, height:'100%'}}
            
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'black',
                    paddingTop: 40,
                    
                },
                tabBarLabelStyle:{
                    color:'white',
                    fontSize:11,
                    fontWeight:'600',
                    textAlign:'center',
                    
                },
                tabBarContentContainerStyle:{
                    width:Dimensions.get('window').width,
                    padding:4
                },
                tabBarItemStyle:{
                    width:Dimensions.get('window').width*0.25,
                    padding:4
                },
                tabBarIndicatorContainerStyle:
                {
                    backgroundColor:'black'
                },
                tabBarIndicatorStyle:
                {
                    backgroundColor:'#E47D3A'

                },
                animationEnabled:false
            }}
            
        >
        <ListTab.Screen name="Watchlist" component={WatchListView}/>
        <ListTab.Screen name="History" component={HistoryView}/>
        <ListTab.Screen name="Crunchy Lists" component={CrunchyListView}/>
        
        <ListTab.Screen name="Offline" component={OfflineView}/>

        </ListTab.Navigator>

    </NavigationContainer>
  )
}


export {MyListView}