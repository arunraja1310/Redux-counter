import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import myReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(myReducer)
console.log("print store",store);
ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
