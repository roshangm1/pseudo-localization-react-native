import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PseudoLocalizationProvider } from '@roshangm1/react-native-pseudo-localization';

export default function App() {
  return (
    <PseudoLocalizationProvider>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>
            This is a test<Text>hello world</Text>
          </Text>
        </View>
      </View>
    </PseudoLocalizationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 90,
    marginVertical: 20,
  },
});
