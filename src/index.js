import createEmotion from 'create-emotion';
import createEmotionStyled from 'create-emotion-styled';
import React from 'react';
import customProps from './plugins/customProperties';
import mixins from './plugins/mixins';

const context = typeof global !== 'undefined' ? global : {};

const emotion = createEmotion(context, {
  stylisPlugins: [customProps, mixins],
});

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  caches,
} = emotion;

export default createEmotionStyled(emotion, React);
