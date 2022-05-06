import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const Task = (props) => {
  const [status, setStatus] = useState("");
  const [complete, setComplete] = useState(false);

  const handleStatusChange = () => {
    if (complete) {
      setStatus("Todo");
      setComplete(false);
    } else {
      setStatus("Complete");
      setComplete(true);
    }
  };

  return (
    <View style={styles.item}>
      {/** Task Display */}
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={() => handleStatusChange()}>
        <Text style={styles.addText}>
          {complete ? (
            <AntDesign name="checkcircleo" size={24} color="black" />
          ) : (
            <AntDesign name="minussquareo" size={24} color="black" />
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
});

export default Task;
