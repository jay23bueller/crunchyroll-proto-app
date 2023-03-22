import {React} from 'react';
import {ScrollView, Text, Image, StyleSheet, View, Button} from 'react-native';



const IntroView = (props) =>
{
    return(
        <View>
            <Text>{props.title}</Text>
            <Text>{props.description}</Text>
        </View>
    );
}

const introViewStyle = StyleSheet.create({

});

const ScrollingTitleView = (props) =>
{
    return(
        <View>
            <Text>{props.section}</Text>
            <ScrollView horizontal={true}></ScrollView>
        </View>
    )
}

const TitleView = (props) =>
{
    return(
        <View>
            <Image/>
            <View>
                <Text></Text>
                <View>
                    <Text></Text>
                    <Button title={"val"}></Button>
                </View>
            </View>
        </View>
    );
}

export {IntroView, ScrollingTitleView, TitleView};