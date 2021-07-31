import { createApi } from '@reduxjs/toolkit/query/react'
import axiosBase from './axiosBase'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: axiosBase({
        baseURL: `${import.meta.env.API_URL}`,
    }),
    tagTypes: [{type: 'collections'}],
    refetchOnReconnect: true,
    endpoints: (build) => ({
        getCollection: build.query({
            query: ({ token, id }) => ({
                method: 'get',
                url: `/collections/${id}`,
                headers: { 'Authorization': `Bearer ${token}` },
                params: { ids: id },
            }),
            transformResponse: (response) => (response.data),
            providesTags: [{type: 'collections', id: id}],
        }),
        addCollection: build.mutation({
            query: ({ token, data }) => ({
                method: 'POST',
                url: `/collections`,
                headers: { 'Authorization': `Bearer ${token}` },
                data: data
            }),
            transformResponse: (response) => (response.data),
            // invalidatesTags: [{type: 'collections', id: id}],
        }),
    }),
})
export const { useGetCollectionQuery, useAddCollectionMutation } = api