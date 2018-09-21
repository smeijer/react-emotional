# react-emotional

> The styled API for emotion and react

`react-emotional` exports `styled` which allows you to use emotion to create React components that have styles attached to them, it also exports all of `emotion`'s exports.

For more documentation on `styled`, [read about it and try it out in the `styled` docs](https://emotion.sh/docs/styled)

```bash
npm install --save emotion react-emotional
```

```jsx
// @live
import { injectGlobal, css } from 'react-emotional';

injectGlobal(`
  @mixin flex {
    display: flex;
    align-items: center;
  }
  
  :root {
    --blue: #3791f5;
  }
`);

const SomeComponent = css`
  @include flex;
  background-color: var(--blue);
`;


render(
  <SomeComponent />
)
```
