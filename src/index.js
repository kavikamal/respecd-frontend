import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index.js';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


// const store = createStore(reducer,
//   compose(applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducer, composeEnhancers( applyMiddleware( thunk ) ) );


ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

export default store;
