import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_3} />
      <View style={styles.View_6} />
      <View style={styles.View_8} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { flexDirection: "row", alignContent: "flex-start" },
  View_3: { width: 100, height: 100, backgroundColor: "#ffff00" },
  View_6: { width: 100, height: 100, backgroundColor: "#00ffff" },
  View_8: { width: 100, height: 100, backgroundColor: "#ff00ff" }
})
