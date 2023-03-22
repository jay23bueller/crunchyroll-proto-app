import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {TitleView} from './MiddleViews';


export default function App() {
  return (
    <View style={{position: 'relative', height: '100%', width:'100%'}}>
      <TopView></TopView>
      <MiddleView></MiddleView>
      <BottomView></BottomView>

    </View>
  );
}


const TopView = () => {
  return(
    <View style={topViewStyles.outerContainer}>
      <View style={topViewStyles.innerLeftContainer}>
        <Image style={{height: 30, width: 120}} source={require('./Images/crunchyroll_icon.png')} resizeMode={'contain'}/>
      </View>
      
      <View style={topViewStyles.innerRightContainer}> 
        <Feather style={topViewStyles.innerRightIcon} name={"cast"} size={30}/>
        <Feather style={topViewStyles.innerRightIcon} name={"search"} size={30}/>
      </View>
    </View>
  );
}

const topViewStyles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '13%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 60,
    backgroundColor: 'black',
    zIndex: 1
  },
  innerLeftContainer: {
    marginRight: 'auto',
    

  },
  innerRightContainer: {
    marginLeft: 'auto',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  innerRightIcon: {
    margin: 4,
    color: 'white'
  }
});

const BottomView = () => {
  
  return(
    <View style={bottomViewStyles.outerContainer}>
      <BottomItem iconName= {'home'} description={'Home'}></BottomItem>
      <BottomItem iconName= {'bookmark'} description={'My Lists'}></BottomItem>
      <BottomItem iconName= {'grid'} description={'Browse'}></BottomItem>
      <BottomItem iconName= {'tv'} description={'Simulcasts'}></BottomItem>
      <BottomItem iconName= {'smile'} description={'Account'}></BottomItem>
    </View>
  );
}

const BottomItem = (props) => {
  return(
    <View style={bottomViewStyles.bottomElem}> 
      <Feather  name={props.iconName} size={25} color={'white'}/>  
      <Text style={bottomViewStyles.bottomElemText}> {props.description}</Text>
    </View>
  )
}

const bottomViewStyles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: '#23252A',
    width: '100%',
    height: '10%',
    paddingLeft: 15,
    paddingRight: 15,
    zIndex: 1,
    paddingTop: 10,
    alignItems: 'flex-start'
  },
  bottomElem: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: 55,
  },
  bottomElemText:{fontSize: 9, marginTop: 5, color: 'white'}
  
});

const MiddleView = () =>
{

  const nums = Array.from({length: 100}, (_, k) => k);

  console.log(nums);
  return(
    <ScrollView contentContainerStyle={middleViewStyles.outerContainer}>
      <TitleView></TitleView>
      {nums.map((v,i)=> <Text key={i}>{v}</Text>)}
    </ScrollView>
  );
}

const middleViewStyles = StyleSheet.create(
  {
    outerContainer: {
      alignItems: 'center', 
      width: '100%', 
      display: 'flex'
    }
  }
)





