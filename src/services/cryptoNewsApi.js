import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders= {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'b22af29022msh1735efa9d0af756p1cfb34jsn8dfdb0a36685',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url , headers : cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints : (builder) => ({
        // returns an object
        // specifying endpoints
        getCryptoNews : builder.query({
            query : ({ newsCategory , count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const { useGetCryptoNewsQuery} = cryptoNewsApi;

/*
const options = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news',
  params: {safeSearch: 'Off', textFormat: 'Raw'},
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'b22af29022msh1735efa9d0af756p1cfb34jsn8dfdb0a36685',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
};
*/