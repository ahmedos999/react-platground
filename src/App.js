import { Provider } from 'react-redux';
import store from './Store';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
    
  );
}

export default App;
