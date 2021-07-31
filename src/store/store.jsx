import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { collectionsApi } from './api'
import { slice } from './slice'

export const store  = configureStore({
    reducer: {
        collection: slice,
        [collectionsApi.reducerPath]: collectionsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(collectionsApi.middleware),
})
setupListeners(store.dispatch)