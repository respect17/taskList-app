import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';
import {
  AppBar,
  Surface,
  Button
} from "@react-native-material/core";
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from mock API
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // Limit to first 10 tasks for brevity
        setTasks(response.data.slice(0, 10).map(task => ({
          ...task,
          completed: false
        })));
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const renderTask = ({ item }) => (
    <Surface
      style={[
        styles.taskCard,
        {
          backgroundColor: item.completed ? '#e6f3e6' : 'white'
        }
      ]}
    >
      <View style={styles.taskContainer}>
        <Text
          style={[
            styles.taskTitle,
            { textDecorationLine: item.completed ? 'line-through' : 'none' }
          ]}
        >
          {item.title}
        </Text>

        {item.completed && (
          <Ionicons
            name="checkmark-circle"
            size={24}
            color="green"
          />
        )}

        <Button
          title="Mark as Complete"
          onPress={() => toggleTaskCompletion(item.id)}
          color={item.completed ? 'gray' : 'primary'}
        />
      </View>
    </Surface>
  );

  return (
    <SafeAreaView style={styles.container}>
      <AppBar
        title="Task List"
        centerTitle={true}
      />

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
  },
  taskCard: {
    marginBottom: 10,
    padding: 15,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskTitle: {
    flex: 1,
    marginRight: 10,
  },
});