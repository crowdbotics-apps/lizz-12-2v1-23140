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
      <View style={styles.View_3}>
        <ImageBackground
          source={{
            uri:
              "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/captain-john-smith-1180w-600h_daMJ7GD.jpg"
          }}
          style={styles.ImageBackground_5}
        >
          <Text style={styles.Text_7}>Sample text content</Text>
          <Text style={styles.Text_10}>Sample text content</Text>
        </ImageBackground>
        <View style={styles.View_11}>
          <View style={styles.View_12}>
            <Icon name="star" style={styles.Icon_19} />
            <Text>11</Text>
          </View>
          <View style={styles.View_13}>
            <Icon name="star" style={styles.Icon_23} />
            <Text>21</Text>
          </View>
          <View style={styles.View_14}>
            <Icon name="star" style={styles.Icon_24} />
            <Text>31</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#ccffff"
  },
  View_3: { width: "100%", height: 250, backgroundColor: "#fffffe" },
  ImageBackground_5: {
    width: "100%",
    height: 200,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundSize: "contain"
  },
  Text_7: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    color: "#ffffff",
    fontWeight: "bold"
  },
  Text_10: { marginTop: 0, marginBottom: 0, fontSize: 10, color: "#ffffff" },
  View_11: { width: "100%", flexDirection: "row" },
  View_12: {
    width: "33.3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Icon_19: { color: "#0000ff" },
  Text_22: {},
  View_13: {
    width: "33.3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Icon_23: { color: "#0000ff" },
  Text_25: {},
  View_14: {
    width: "33.3%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  Icon_24: { color: "#0000ff" },
  Text_26: {}
})
