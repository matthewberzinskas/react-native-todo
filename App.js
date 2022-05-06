import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import uuid from "react-native-uuid";

import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const [disabled, setDisabled] = useState(true);

  const handleAddTask = () => {
    Keyboard.dismiss();
    console.log("Adding new task:", task);
    setTaskList([...taskList, task]);
    setTask(null);
  };

  const handleCompleteTask = (index) => {
    console.log("Completing task:", index);

    let taskListCopy = [...taskList];
    taskListCopy.splice(index, 1);
    setTaskList(taskListCopy);
  };

  return (
    <View style={styles.container}>
      {/** Todays Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <TouchableOpacity
                key={uuid.v1()}
                //onPress={() => handleCompleteTask(index)}
              >
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/** Add a new task*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTasksWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity
          onPress={() => handleAddTask()}
          disabled={task === null}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>
              <Icon name="plus" size={30} color="#000" />
            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 9,
    paddingHorizontal: 20,
    maxWidth: "100%",
  },
  tasksWrapper: {
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 20,
  },
  writeTasksWrapper: {
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {},
});
