import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useTaskStore } from '../store/store';

export default function Test() {
  const [count, setCount] = useState(0);

  // Zustand
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);

  useEffect(() => {
    console.log('test3');
  }, [count]);

  useEffect(() => {
    console.log('countChange :', count);
  }, [count]);

  const handleCount = () => {
    console.log('test2');
    setCount(prev => prev + 1);
  };

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Incrementer" onPress={handleCount} />

      <Text>Nombre de tâches : {tasks.length}</Text>
      <Button
        title="Ajouter une tâche"
        onPress={() => addTask({ id: Date.now(), title: 'Réviser React', done: false })}
      />
    </View>
  );
}