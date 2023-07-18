import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Pressable,
  Text,
} from "react-native";

function GoalInput({ onAddGoalPress, modalIsVisible, onModalCancel }) {
  const [newGoal, setNewGoal] = useState("");

  const inputChangeHandler = (enteredText) => {
    setNewGoal({ text: enteredText, key: Math.random().toString() });
  };

  const addGoalHandler = () => {
    if (newGoal) {
      onAddGoalPress(newGoal);
      setNewGoal("");
    }
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={newGoal}
          placeholder="Your next goAl.."
          style={styles.textInput}
          onChangeText={inputChangeHandler}
        />
        <View style={styles.options}>
          <View style={styles.optionButton}>
            <Pressable onPress={addGoalHandler}>
              <Text style={styles.optionButtonText}>Add Goal</Text>
            </Pressable>
          </View>
          <View style={styles.optionButton}>
            <Pressable onPress={onModalCancel}>
              <Text style={styles.optionButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: "40%",
    margin: 10,
    paddingVertical: 40,
    paddingHorizontal: 2,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    width: "90%",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
    alignItems: "center",
  },
  optionButton: {
    backgroundColor: "blue",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  optionButtonText: {
    color: "white",
    fontWeight: 500,
  },
});
