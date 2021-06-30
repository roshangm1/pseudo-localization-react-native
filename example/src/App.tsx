import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PseudoLocalizationProvider } from 'react-native-pseudo-localization';

export default function App() {
  return (
    <PseudoLocalizationProvider enabled={true}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text numberOfLines={1}>This is a test</Text>
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
