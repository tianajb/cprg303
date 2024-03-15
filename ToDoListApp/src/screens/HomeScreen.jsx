import React from 'react';
import { Button, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };

    return (
        <MainLayout>
            <SafeAreaView>
                <ToDoForm addTask={addTask} />
                <ToDoList tasks={tasks} />
                <Pressable>
                    <Button
                        styles={styles.paddings}
                        title="Go to About"
                        onPress={() => navigation.navigate('About')}
                    />
                </Pressable>
            </SafeAreaView>
        </MainLayout>


    );
}

const styles = StyleSheet.create({
    paddings: {
        padding: 10,
        paddingTop: 20,
    },
});