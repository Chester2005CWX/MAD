import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView, View, FlatList, StyleSheet, Text, Button,} from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

//-- data array
const ROWS = [
  { id: '0', text: 'Ban Mian', img:'https://media.idownloadblog.com/wp-content/uploads/2020/10/iPhone-12-dark-black-wallpaper.png'},
  { id: '1', text: 'Chicken Rice' },
  { id: '2', text: 'Monster Curry' },
  { id: '3', text: 'Mala Hotpot' },
  { id: '4', text: "McDonald's" },
]
const BLANKROWS= [
  { id: 'blank' }
]
//-- JSX for one item
const Item = ({text, img}) =>{ 
  console.log("item: " + text)
  return (
    <View style={styles.row} >
      <Text style={styles.row}>{img + text}</Text>
    </View>
  )
}

//-- main app
const FNB = () => {
  console.log("starting app")

  console.log("starting app")
  console.log("status bar height: " + StatusBar.currentHeight)
  //-- function to render an item in the list
  const renderItem = ({ item }) => {
    console.log(`item: ${item.id} - ${item.text}`)
    return (
      //-- item is one item in the data array being passed
      <TouchableOpacity onPress={()=>console.log(`item pressed: ${item.id}, ${item.text}`)}>
        <Item text={item.img + item.text} />
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={()=>console.log("go back to homepage")}>
        <AntDesign name="back" size={40} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Food & Beverages</Text>

      <TouchableOpacity style={styles.filterButton} onPress={()=>console.log('filter')}>
        <FontAwesome name="filter" size={45} color="black" text="Filter" />
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>

      <View style={styles.rectangle}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList data={ROWS} renderItem={renderItem} keyExtractor={item => item.id} />
        </SafeAreaView>
      </View>

      <View style={styles.navbar}>
      <TouchableOpacity style={styles.activeNavbarIcon} onPress={()=>console.log('You re')}>
        <Ionicons name="fast-food-outline" size={70} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.inactiveNavbarIcons}>
        <AntDesign name="star" size={70} color="#ffde59" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.inactiveNavbarIcons}>
        <Ionicons name="map-outline" size={70} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.inactiveNavbarIcons}>
        <FontAwesome name="thumbs-o-up" size={70} color="black" />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default FNB

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
    marginLeft: '10%',
    width: '51%',
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
    backgroundColor: 'white'
  },

  row: {
    padding: '3%',
    fontSize: '30',
    backgroundColor: '#cfb48b',
    width: '90%',
    height:'',
    borderTopRightRadius: '45',
    borderBottomRightRadius: '45',
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