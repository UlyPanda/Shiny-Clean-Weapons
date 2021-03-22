import Nav from './components/nav';
import Router from '../Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import '../css/index.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav/>
        <Router/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
