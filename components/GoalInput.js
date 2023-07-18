import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ onAddGoalPress }) {
  const [newGoal, setNewGoal] = useState("");

  const inputChangeHandler = (enteredText) => {
    setNewGoal({ text: enteredText, key: Math.random().toString() });
  };

  const addGoalHandler = () => {
    if(newGoal){
      onAddGoalPress(newGoal);
      setNewGoal("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={newGoal}
        placeholder="Your next goAl.."
        style={styles.textInput}
        onChangeText={inputChangeHandler}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    marginRight: 8,
    padding: 8,
    width: "70%",
  },
});
