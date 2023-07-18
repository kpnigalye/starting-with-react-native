import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ itemIndex, itemText, onGoalPress }) {
  const deleteGoalHandler = () => {
    onGoalPress(itemIndex);
  };

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalIndex}>{itemIndex}</Text>
        <Text style={styles.goalText}>{itemText}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalIndex: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: "#ffffff",
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "purple",
    borderRadius: 5,
    flexDirection: "row",
    columnGap: 20,
    alignItems: "center",
  },
  goalText: {
    color: "white",
    fontWeight: 500,
  },
});
