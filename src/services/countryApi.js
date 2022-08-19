import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://restcountries.com/v2'

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query: () => `/all`
        }),
        getCountryDetail: builder.query({
            query: (name) => `/name/${name}`
        }),
    })
})

export const {useGetCountriesQuery, useGetCountryDetailQuery} = countryApi