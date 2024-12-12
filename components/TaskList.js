import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onToggleTask }) => {
    const renderTask = ({ item }) => (
        <TaskCard task={item} onToggle={() => onToggleTask(item.id)} />
    );

    return (
        <FlatList
            data={tasks}
            renderItem={renderTask}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
});

export default TaskList;