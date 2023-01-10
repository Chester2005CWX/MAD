import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';

//-- source: https://docs.expo.dev/versions/latest/sdk/location/
import * as Location from 'expo-location';
// import MapView, {Marker} from 'react-native-maps';

export default function GPS() {
  // 2 state to store location and error
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // create getLocation function
  const getLocation = async () => {
      
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  //-- run once at mount
  useEffect(() => {
    getLocation();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Get Location" onPress={()=>{
        getLocation()
      }} />
    </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});