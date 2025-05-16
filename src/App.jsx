// import Button from './button/Button';
import { GlobalStyles } from './styles/GlobalStyles';
import Toggle from './components/toggle/Toggle';
import { useState } from 'react';

const App = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <>
      <GlobalStyles />
      <h1>Our Pricing</h1>
      <Toggle setActive={setActive} active={active} />
    </>
  );
};

export default App;
