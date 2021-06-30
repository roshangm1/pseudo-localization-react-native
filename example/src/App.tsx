import { PseudoLocalizationProvider } from 'pseudo-localization-rn';

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <PseudoLocalizationProvider enabled={true}>
      <View style={styles.container}>
        <Text>
          I love you
          <Text>
            Hello
            <Text>
              World
              <Text>
                My nepal
                <Text>
                  Country<Text>Germany</Text>
                </Text>
              </Text>
            </Text>
          </Text>
        </Text>
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
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
