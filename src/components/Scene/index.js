import React, {Component} from "react"
import {View} from "react-native"
import styles from "./styles"

export default class Scene extends Component {
  render() {
    return (
      <View style={styles.scene}>
        {this.props.children}
      </View>
    )
  }
}
