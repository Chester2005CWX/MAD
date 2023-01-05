import { TouchableOpacity } from "react-native";

export default function customComponent({text, onMyInput}){
    return (
        <TouchableOpacity onPress={()=> onMyInput()}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}