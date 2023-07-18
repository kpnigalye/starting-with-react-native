import { Button, Text, TextInput, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import { styles } from "./styles";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (newGoal) => {
    setGoals((currentGoals) => [...currentGoals, newGoal]);
  };

  const deleteGoalHandler = (currentIndex) => {
    let goalsToUpdate = [...goals];
    goalsToUpdate.splice(currentIndex, 1);
    setGoals(goalsToUpdate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.listHeader}>Goal Tracker</Text>
      <GoalInput onAddGoalPress={addGoalHandler} />

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 3,
        }}
      />

      <View style={styles.goalsContainer}>
        <Text style={styles.listHeader}>List of Your Goals</Text>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemIndex={itemData.index}
                itemText={itemData.item.text}
                onGoalPress={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
