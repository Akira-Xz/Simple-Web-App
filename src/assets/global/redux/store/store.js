import { configureStore } from '@reduxjs/toolkit'
import filterSlide from '../slice/filterSlide'
import userSlide from '../slice/userSlide'
import { loadStorage } from '../helpers/loadStorage'
import { saveStorage } from '../helpers/saveStorage'


export const store = configureStore({
  reducer: {
    user: userSlide,    
  },
  preloadedState: loadStorage(),
})
store.subscribe(() => saveStorage(store.getState()));