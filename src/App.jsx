import Button from './button/Button';
import { GlobalStyles } from './styles/GlobalStyles';
import Toggle from './components/toggle/Toggle';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <h1>Our Pricing</h1>
      <Toggle />
    </>
  );
};

export default App;
