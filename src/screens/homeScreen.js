import * as React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
