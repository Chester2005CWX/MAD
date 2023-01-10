import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, SafeAreaView, View, FlatList, StyleSheet, Text, Button,} from 'react-native';
import { MaterialIcons, AntDesign, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

const FilterScreen = () => {
    const [isWestern, setWestern] = useState(false);
    const [isChinese, setChinese] = useState(false);
    const [isJapanese, setJapanese] = useState(false);
    const [isKorean, setKorean] = useState(false);
    const [isFC1, setFC1] = useState(false);
    const [isFC2, setFC2] = useState(false);
    const [isFC3, setFC3] = useState(false);
    const [isFC4, setFC4] = useState(false);
    const [isFC5, setFC5] = useState(false);
    const [isFC6, setFC6] = useState(false);
    const [isHalal, setHalal] = useState(false);
    const [isFastFood, setFastFood] = useState(false);
    const [isDesert, setDesert] = useState(false);
    const [isDrink, setDrink] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Filter</Text>
                <TouchableOpacity>
                    <Entypo name="cross" size={50} color="black" style = {styles.xButton}/>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.separationLine}> </Text>
            </View>

            <View>
                <Text style={styles.filterTitle}>cusine types</Text>
            </View>

            <View style={styles.CheckboxRow}>
                <Checkbox value={isWestern} onValueChange={setWestern} style={styles.checkbox}/>
                <Text> Western </Text>
                <Checkbox value={isChinese} onValueChange={setChinese} style={styles.checkbox}/>
                <Text> Chinese </Text>
            </View>

            <View style={styles.CheckboxRow}>
                <Checkbox value={isJapanese} onValueChange={setJapanese} style={styles.checkbox}/>
                <Text> Japanese </Text>
                <Checkbox value={isKorean} onValueChange={setKorean} style={styles.checkbox}/>
                <Text> Korean </Text>
            </View>

            <View>
                <Text style={styles.separationLine}> </Text>
            </View>

            <View>
                <Text style={styles.filterTitle}>foodcourts (1-6)</Text>
            </View>

            <View style={styles.CheckboxRow}>
                <Checkbox value={isFC1} onValueChange={setFC1} style={styles.checkbox}/>
                <Text> FC1 </Text>
                <Checkbox value={isFC2} onValueChange={setFC2} style={styles.checkbox}/>
                <Text> FC2 </Text>
                <Checkbox value={isFC3} onValueChange={setFC3} style={styles.checkbox}/>
                <Text> FC3 </Text>
            </View>

            <View style={styles.CheckboxRow}>
                <Checkbox value={isFC4} onValueChange={setFC4} style={styles.checkbox}/>
                <Text> FC4 </Text>
                <Checkbox value={isFC5} onValueChange={setFC5} style={styles.checkbox}/>
                <Text> FC5 </Text>
                <Checkbox value={isFC6} onValueChange={setFC6} style={styles.checkbox}/>
                <Text> FC6 </Text>
            </View>

            <View>
                <Text style={styles.separationLine}> </Text>
            </View>

            <View>
                <Text style={styles.filterTitle}>miscellaneous</Text>
            </View>

            <View style={styles.CheckboxRow}>
                <Checkbox value={isHalal} onValueChange={setHalal} style={styles.checkbox}/>
                <Text> Halal </Text>
                <Checkbox value={isFastFood} onValueChange={setFastFood} style={styles.checkbox}/>
                <Text> Fastfood </Text>
            </View>

            <View style={styles.CheckboxRow}>
                <Checkbox value={isDesert} onValueChange={setDesert} style={styles.checkbox}/>
                <Text> Desert </Text>
                <Checkbox value={isDrink} onValueChange={setDrink} style={styles.checkbox}/>
                <Text> Drinks </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e1dbd2',
    },
  
    xButton: {
      marginLeft: '35%',
      width : ' 80%',
    },
  
    title: {
      fontSize : '40',
      marginLeft: '37.5%',
      width: '25%',
      marginBottom: '5%',
      fontWeight: 'bold',
    },
  
    titleContainer: {
    flexDirection: 'row',
    marginTop : '20%'
    },
    
    cusineTypesCheckboxRow: {
        flexDirection: 'row',
        marginLeft : '10%',
        marginTop : '5%',
    },

    checkbox:{
        width: '10%',
        height: '200%',
        
    },
    
    separationLine:{
        backgroundColor:"black", 
        height:'5%', 
        marginTop:'10%',
    },

    CheckboxRow:{
        flexDirection: 'row',
        padding: '5%',
        justifyContent: 'center',
    },

    miscellaneousCheckboxRow:{
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: '5%',
    },

    filterTitle:{
        textAlign: 'center',
        fontSize:'35',
        marginTop: '-5%'
    }
  
  });

export default FilterScreen;