import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import reduxStore from './redux.js'
import { BrowserRouter } from 'react-router-dom'
// import reduxStore from './redux.js'



const { store, persistor } = reduxStore()



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
)
