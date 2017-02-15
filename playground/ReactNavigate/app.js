import React from 'react';
import {
  AppRegistry,
  Text,
  ListView,
  Image,
  MapView,
  ScrollView,
  StyleSheet,
  View,
  
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'BearBnb',
  };
  render() {
    let img = 'https://facebook.github.io/react/img/logo_og.png'
    let house_img = '/Users/tvykruta/ReactNavigate/house.png'
    let tom_img_uri =  house_img;
    let bear_img = '/Users/tvykruta/ReactNavigate/bear.png'
    let hut = 'http://www.sunrisethaiholiday.com/wp-content/uploads/2015/08/1600x800-banner-front-2.png'
    let hut_local = '/Users/tvykruta/ReactNavigate/hut.png'
    return (
        <View>
        <ScrollView>
        <View style={{height:200}}>
            <Image
                resizeMode='contain'
                style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                }}
                source={{uri: hut_local}}
            />
        </View>
        
        <View style={styles.body}>
            <Text style={styles.title}>Bamboo Bear Hut in Zimbabwe rice fields</Text>
            <View style={styles.host}>
                <View style={styles.hostText}>
                    <Text style={{fontWeight:'bold'}}>Entire Place</Text>
                    <Text>Hosted by papabear</Text>
                </View>
                <Image source={{uri:bear_img}} style={{height: 50, width:50}}/>
            </View>
            <View style={styles.house_features}>
                <View style={styles.box}>
                    <Image source={{uri:tom_img_uri}} style={{height: 50, width:50}}/>
                    <Text>12 bears</Text>
                </View>
                <View style={styles.box}>
                    <Image source={{uri:tom_img_uri}} style={{height: 50, width:50}}/>
                    <Text>5 beds</Text>
                </View>
                <View style={styles.box}>
                    <Image source={{uri:tom_img_uri}} style={{height: 50, width:50}}/>
                    <Text>8 baths</Text>
                </View>
                <View style={styles.box}>
                    <Image source={{uri:tom_img_uri}} style={{height: 50, width:50}}/>
                    <Text>4 dens</Text>
                </View>
            </View>
            <View style={styles.host}>
                <View style={styles.hostText}>
                    <Text style={{fontWeight:'bold'}}>About this thome</Text>
                    <Text>This bamboo cottage is a secluded eco retreat down a quiet foot path nestled in the rice fields and only a five minute walk to a salmon rich river basin. Perfect for a single bear, a couple, or a family of bears to spend a few nights and relax.
                    </Text>
                </View>
            </View>
            <View style={styles.host}>
            <Text>1 Night Minimum</Text>
            </View>
             <MapView
                style={{height: 200, margin: 0}}
                showsUserLocation={true}
            />
            <View style={styles.house_features}>
                <View style={styles.box_checkout}>
                    <Text style={styles.checkin_checkout}>Cneck in 2:00 PM</Text>
                </View>
                <View style={styles.box_checkout}>
                    <Text style={styles.checkin_checkout}>Check out 11:00 AM</Text>
                </View>
            </View>
            <View style={styles.host}>
                <Image source={{uri:bear_img}} style={{height: 50, width:50}}/>
                <View style={styles.hostText}>
                    <Text style={{fontWeight:'bold'}}>Papa Bear</Text>
                    <Text>Since 2016</Text>
                    <Text>3.1/5 rating</Text>
                </View>
            </View>
            <View style={styles.host}>
                <View style={styles.hostText}>
                    <Text style={{fontWeight:'bold'}}>Review by Anne, Michigan</Text>
                    <Text>Is a terrible experience wet in there and full of bear feces. We didn't get any sleep at all. It smelled like rotting fish and my son found the remains of an adult deer under the bed. Would not recommend staying here! What kind of sick people would list this house on airbnb?</Text>
                    <Text/>
                    <Text style={{fontWeight:'bold'}}>Response by papabear</Text>
                    <Text>You booked off bearbnb, lady! What the heck did you expect? I'm sorry for your trouble, use airbnb next time. Please remove this negative review or I will contact BearBnb and file a complaint.
                    </Text>
                </View>
            </View>
        </View>
        </ScrollView>
        </View>
    )}
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

styles = StyleSheet.create({
    body: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    host: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 20,
            paddingBottom: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#bbb'
    },
    hostText: {
    },
    house_features: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop:20,
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        paddingBottom: 20
    },
    checkin_checkout: {
        fontSize: 20,
    },
    box_checkout: {
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
    },
})
AppRegistry.registerComponent('ReactNavigate', () => SimpleApp);