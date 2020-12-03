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
    <View>
      <View style={styles.View_5}>
        <View style={styles.View_6}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/images.jpeg"
            }}
            style={styles.Image_10}
          />
        </View>
        <View style={styles.View_7}>
          <Text style={styles.Text_12}>Sender name</Text>
          <Text style={styles.Text_16}>Sample message content</Text>
        </View>
        <View style={styles.View_8}>
          <Text style={styles.Text_20}>12:00pm</Text>
        </View>
      </View>
      <View style={styles.View_21}>
        <View style={styles.View_6}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/images.jpeg"
            }}
            style={styles.Image_10}
          />
        </View>
        <View style={styles.View_7}>
          <Text style={styles.Text_12}>Sender name</Text>
          <Text style={styles.Text_16}>Sample message content</Text>
        </View>
        <View style={styles.View_8}>
          <Text style={styles.Text_20}>12:00pm</Text>
        </View>
      </View>
      <View style={styles.View_22}>
        <View style={styles.View_6}>
          <Image
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/images.jpeg"
            }}
            style={styles.Image_10}
          />
        </View>
        <View style={styles.View_7}>
          <Text style={styles.Text_12}>Sender name</Text>
          <Text style={styles.Text_16}>Sample message content</Text>
        </View>
        <View style={styles.View_8}>
          <Text style={styles.Text_20}>12:00pm</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_5: {
    width: "100%",
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    borderColor: "#cccccc",
    borderBottomWidth: 2
  },
  View_6: { width: "20%", alignItems: "center" },
  Image_10: { width: 40, height: 40, borderRadius: 40 },
  View_7: { width: "60%" },
  Text_12: { marginTop: 0, marginBottom: 0, fontFamily: "Lato-Bold" },
  Text_16: { fontSize: 10, fontFamily: "Lato-Regular" },
  View_8: { width: "20%", alignItems: "flex-end" },
  Text_20: { fontSize: 8, fontFamily: "Lato-Regular" },
  View_21: {
    width: "100%",
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    borderColor: "#cccccc",
    borderBottomWidth: 2
  },
  View_6: { width: "20%", alignItems: "center" },
  Image_10: { width: 40, height: 40, borderRadius: 40 },
  View_7: { width: "60%" },
  Text_12: { marginTop: 0, marginBottom: 0, fontFamily: "Lato-Bold" },
  Text_16: { fontSize: 10, fontFamily: "Lato-Regular" },
  View_8: { width: "20%", alignItems: "flex-end" },
  Text_20: { fontSize: 8, fontFamily: "Lato-Regular" },
  View_22: {
    width: "100%",
    height: 60,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    borderColor: "#cccccc",
    borderBottomWidth: 2
  },
  View_6: { width: "20%", alignItems: "center" },
  Image_10: { width: 40, height: 40, borderRadius: 40 },
  View_7: { width: "60%" },
  Text_12: { marginTop: 0, marginBottom: 0, fontFamily: "Lato-Bold" },
  Text_16: { fontSize: 10, fontFamily: "Lato-Regular" },
  View_8: { width: "20%", alignItems: "flex-end" },
  Text_20: { fontSize: 8, fontFamily: "Lato-Regular" }
})
