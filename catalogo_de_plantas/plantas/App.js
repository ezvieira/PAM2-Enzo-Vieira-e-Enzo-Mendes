import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';

export default function App() {
  return (  
    <ScrollView style={styles.fundo}>
      <View>
      <Text>Catalogo de Plantas</Text>
     </View>
     <View> 
      <Button onPress={() => {setIsHungry(false);}} 
     </View>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,   
    height: '100%', 
    backgroundColor: '#1db61d',
    width: '100%',
    
  },
});
