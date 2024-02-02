import React from 'react';
import {
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  View,
  Text,
} from 'react-native';

function ToDoForm(props) {
  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
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
});
export default ToDoForm;