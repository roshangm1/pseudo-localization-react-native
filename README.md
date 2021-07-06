# @roshangm1/react-native-pseudo-localization

Pseudo Localization for React Native

## Installation

```sh
yarn add @roshangm1/react-native-pseudo-localization

```

## Usage

```js
import { PseudoLocalizationProvider } from '@roshangm1/react-native-pseudo-localization';

return (
  // enabled prop is optional and is true by default
  <PseudoLocalizationProvider enabled={true}>
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>
          This is a test<Text>hello world</Text>
        </Text>
      </View>
    </View>
  </PseudoLocalizationProvider>
);
```

## Example

`hello world` would look like `ħḗḗŀŀǿǿ ẇǿǿřŀḓ`.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
