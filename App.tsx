import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const style = {
 
};

const App = () => {
  return (
    <SafeAreaView style={styles.container }>
      <Text
        style={{
          color: 'white',
          fontSize: 50,
          fontWeight: 600,
        }}
      >
        Apasasdp
      </Text>

      <Image
        style={{
          width: 200,
          height: 300,
        }}
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1758742688708-57cea1ba9879?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
        }}
      />

      {/* button 1 */}
      <Button title="button component 1"></Button>

      {/* button 2 */}
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: 'orange',
          marginTop: 20,
        }}
        onPress={() => Alert.alert('sd')}
      >
        <Text>button component 2</Text>
      </TouchableOpacity>

      {/* button 3 */}
      <Pressable
        style={{
          padding: 10,
          backgroundColor: 'green',
          marginTop: 20,
        }}
        onPress={() => Alert.alert('sd')}
      >
        <Text>button component 3</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#210210',
    alignItems: 'center',
  },
})
