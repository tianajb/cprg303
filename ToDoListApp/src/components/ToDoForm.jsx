import React from 'react';
import {
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  View,
  Text,
} from 'react-native';

function ToDoForm({ addTask }) {

  const [taskText, setTaskText] = React.useState('');


  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={[styles.input]}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button style={[styles.taskText]} title="Add task" onPress={() => addTask(taskText)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    padding: 10,
  },
});
export default ToDoForm;