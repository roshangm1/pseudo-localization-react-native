import React, { createContext } from 'react';
import { Text } from 'react-native';
import pseudoLocalizeString from './pseudoLocalizeString';

const PseudoLocalizationContext = createContext(false);

interface PseudoLocalizationProps {
  enabled?: boolean;
}

//@ts-ignore
const isNewTextVersion = Boolean(Text?.render);
const PseudoLocalizationProvider: React.FC<PseudoLocalizationProps> = (
  props
) => {
  const { enabled } = props;
  const processData = (data: string | []) => {
    if (!enabled) {
      return data;
    }
    if (typeof data === 'string') {
      return pseudoLocalizeString(data);
    }

    if (!data || !Array.isArray(data)) {
      return data;
    }
    return data.map((item) => {
      if (typeof item === 'string') {
        return pseudoLocalizeString(item);
      }
      return item;
    });
  };

  const render = (...args: unknown[]) => {
    let origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      children: processData(origin.props.children),
    });
  };
  //@ts-ignore
  let oldRender = isNewTextVersion ? Text.render : Text.prototype.render;
  if (isNewTextVersion) {
    //@ts-ignore
    Text.render = render;
  } else {
    Text.prototype.render = render;
  }

  return (
    <PseudoLocalizationContext.Provider value={enabled ?? true}>
      {props.children}
    </PseudoLocalizationContext.Provider>
  );
};

export default PseudoLocalizationProvider;
