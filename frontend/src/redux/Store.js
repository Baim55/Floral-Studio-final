import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import  productSlice  from './productSlice'
import  basketSlice  from './basketSlice'
 
const persistProductConfig = {
  key: 'products',
  storage,
}
 
const persistBasketConfig = {
  key: 'basket',
  storage,
}

const persistedProductReducer = persistReducer(persistProductConfig, productSlice)

const persistedBasketReducer = persistReducer(persistBasketConfig, basketSlice)

export const store = configureStore({
  reducer: {products: persistedProductReducer,basket:persistedBasketReducer},

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware(
   {serializableCheck:false}
  )
})

const persistor = persistStore(store)
export default persistor