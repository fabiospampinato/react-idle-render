# React Idle Render

React component to render a subtree only when the browser is idle.

Useful when an expensive subtree gets re-rendered frequently, by using this component we can skip some unnecessary re-renders, improving performance.

## Install

```sh
npm install --save react-idle-render
```

## Usage

```tsx
import Idle from 'react-idle-render';

const MyComponent = () => (
  <Idle timeout={1000}>
    {() => {
      const result = someExpensiveFunction ();
      return <div>{result}</div>;
    }}
  </Idle>
);
```

## License

MIT © Fabio Spampinato
