// import Button from './button/Button';
import { GlobalStyles } from './styles/GlobalStyles';
// import Toggle from './components/toggle/Toggle';
import { useState } from 'react';
import Header from './components/header/Header';

const App = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <>
      <GlobalStyles />
      <Header setActive={setActive} active={active} />
      <CardsContainer active={active} />

      {/* <Toggle setActive={setActive} active={active} /> */}
    </>
  );
};

export default App;
