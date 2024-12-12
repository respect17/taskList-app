import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TaskCard from './TaskCard';
import { Divider } from "@react-native-material/core";

const TaskList = ({ tasks, onToggleTask }) => {
    const renderTask = ({ item }) => (
        <>
            <TaskCard task={item} onToggle={() => onToggleTask(item.id)} />
            <Divider style={styles.divider} />
        </>
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
    divider: {
        marginVertical: 5,
    },
});

export default TaskList;