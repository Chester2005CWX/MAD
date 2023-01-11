import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView, View, FlatList, StyleSheet, Text, Button, } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

//-- data array
const ROWS = [
    { id: '0', text: 'Chicken Rice Store (FC4)' },
  ]
  const BLANKROWS= [
    { id: 'blank' }
  ]
  //-- JSX for one item
  const Item = ({text}) =>{ 
    console.log("item: " + text)
    return (
      <View style={styles.row} >
        <Text style={styles.row}>{text}</Text>
      </View>
    )
  }

//-- main app
const Homepage = () => {
    console.log("starting app")

    console.log("starting app")
    console.log("status bar height: " + StatusBar.currentHeight)

    const renderItem = ({ item }) => {
        console.log(`item: ${item.id} - ${item.text}`)
        return (
          //-- item is one item in the data array being passed
          <TouchableOpacity onPress={()=>console.log(`item pressed: ${item.id}, ${item.text}`)}>
            <Item text={item.text} />
            
          </TouchableOpacity>
        )
      }


    return (
        <View style={styles.container}>
            <View style={styles.SPFABox}>
                <Text style={styles.titleSP}>SP</Text>
                <Text style={styles.titleFA}>Food App</Text>
            </View>

            <View style={styles.rectangle}>
                <Text style={styles.homeText1}> Food suggestion </Text>
                <Text style={styles.homeText2}> for the day: </Text>
                <View style={styles.rectangle}>
                <SafeAreaView>
                    <View data={ROWS} renderItem={renderItem} keyExtractor={item => item.id}></View>
                </SafeAreaView>
            </View>
            </View>

            

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.inactiveNavbarIcons} onPress={() => console.log('You are here')}>
                    <Ionicons name="fast-food-outline" size={70} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.inactiveNavbarIcons}>
                    <AntDesign name="star" size={70} color="#ffde59" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.inactiveNavbarIcons}>
                    <Ionicons name="map-outline" size={70} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.activeNavbarIcon}>
                    <FontAwesome name="thumbs-o-up" size={70} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1dbd2',
    },

    backButton: {
        marginTop: '15%',
        marginLeft: '10%',
        width: '20%',
        height: '8%',
    },

    homeText1: {
        marginTop: '5%',
        fontSize: '20',
    },

    homeText2: {
        fontSize: '20',
    },

    SPFABox: {
        flexDirection: 'row',
        marginTop: '10%'
    },

    titleSP: {
        fontSize: '40',
        marginLeft: '30%',
        width: '15%',
        marginTop: '5%',
        marginBottom: '5%',
        color: 'red',
        fontWeight: 'bold',
    },

    titleFA: {
        fontSize: '25',
        marginTop: '10%',
        marginBottom: '5%',
        width: '30%',
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: '5px',
    },

    filterButton: {
        marginLeft: '65%',
        backgroundColor: '#deae7b',
        width: '25%',
        flexDirection: 'row',
        marginTop: '25%',
        position: 'absolute',
        padding: '3%',
        borderRadius: '22',
    },

    filterText: {
        fontSize: '25',
        marginTop: '13%',
    },

    listStyle: {
        backgroundColor: 'orange',
    },

    rectangle: {
        height: "60%", 
        flexDirection: 'column',
        alignItems: 'center',       
    },

    row: {
        padding: '5%',
        fontSize: '20',
        fontWeight: 'bold',
        backgroundColor: '#f9e7cf',
        textAlign: 'center',
        borderRadius: '35',
        marginBottom: '2%'
    },

    navbar: {
        marginTop: '15%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: '25',
        marginLeft: '3%',
        marginRight: '3%',
        padding: '2%',
    },

    inactiveNavbarIcons: {
        padding: '3%',
    },

    activeNavbarIcon: {
        backgroundColor: '#cfb48b',
        padding: '3%',
        borderRadius: '25',
    },


});