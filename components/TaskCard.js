import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Surface, Button } from "@react-native-material/core"; // Use Surface instead of Card
import { Ionicons } from '@expo/vector-icons';

const TaskCard = ({ task, onToggle }) => {
    return (
        <Surface
            style={[
                styles.taskCard,
                { backgroundColor: task.completed ? '#e6f3e6' : 'white' }
            ]}
        >
            <View style={styles.taskContainer}>
                <Text
                    style={[
                        styles.taskTitle,
                        { textDecorationLine: task.completed ? 'line-through' : 'none' }
                    ]}
                >
                    {task.title}
                </Text>

                {task.completed && (
                    <Ionicons
                        name="checkmark-circle"
                        size={24}
                        color="green"
                    />
                )}

                <Button
                    title="Mark as Complete"
                    onPress={onToggle}
                    color={task.completed ? 'gray' : 'primary'}
                />
            </View>
        </Surface>
    );
};

const styles = StyleSheet.create({
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

export default TaskCard;