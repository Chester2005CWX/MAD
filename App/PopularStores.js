import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView, View, FlatList, StyleSheet, Text, Button,} from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

//-- data array
const ROWS = [
  { id: '0', text: 'Chicken Rice Store (FC4)' },
  { id: '1', text: 'Monster Curry (FC1)' },
  { id: '2', text: 'Western Food (FC1)' },
  { id: '3', text: 'Mala Hotpot (FC3)' },
  { id: '4', text: "McDonald's (plaza)" },
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
const PopularStores = () => {
  console.log("starting app")

  console.log("starting app")
  console.log("status bar height: " + StatusBar.currentHeight)
  //-- function to render an item in the list
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

      <TouchableOpacity style={styles.backButton} onPress={()=>console.log("go back to homepage")}>
        <AntDesign name="back" size={40} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Popular Stores</Text>

      <View style={styles.rectangle}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList data={ROWS} renderItem={renderItem} keyExtractor={item => item.id} />
        </SafeAreaView>
      </View>
      

      <View style={styles.navbar}>
      <TouchableOpacity style={styles.inactiveNavbarIcons} onPress={()=>console.log('You are here')}>
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

export default PopularStores

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efd5ad',
  },

  backButton: {
    marginTop: '15%',
    marginLeft: '10%',
    width: '20%',
    height: '8%',
  },

  title: {
    fontSize : '25',
    marginLeft: '30%',
    width: '100%',
    marginBottom: '5%'
  },

  filterButton:{
    marginLeft: '65%',
    backgroundColor: '#deae7b',
    width: '25%',
    flexDirection: 'row', 
    marginTop:'25%',
    position: 'absolute',
    padding: '3%',
    borderRadius: '22',
  },

  filterText: {
    fontSize:'25',
    marginTop: '13%',
  },

  listStyle: {
    backgroundColor: 'orange',
  },

  rectangle: {
    height: "60%",
    width: '100%',
    borderWidth: '4%',
    backgroundColor: '#deae7b'
  },

  row: {
    padding: '5%',
    fontSize: '20',
    fontWeight :'bold',
    backgroundColor: '#f9e7cf',
    textAlign:'center',
    borderRadius: '35',
    marginBottom: '2%'
  },

  navbar: {
    marginTop: '5%',
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