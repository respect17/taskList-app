// src/App.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Flex } from "@react-native-material/core"; // Use Flex instead of Container
import Header from './components/Header';
import TaskList from './components/TaskList';
import axios from 'axios';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
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

  return (
    <SafeAreaView style={styles.container}>
      <Flex>
        <Header />
        <TaskList tasks={tasks} onToggleTask={toggleTaskCompletion} />
      </Flex>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appBarContainer: {
    width: '10%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});