import rootReducer from './store/reducers/rootReducer'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'


const reduxStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  })
  const persistor = persistStore(store)
  return {
    store,
    persistor
  }
}
export default reduxStore