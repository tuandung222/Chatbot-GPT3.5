import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const backend_api = 'https://backend-cinnamon-test.up.railway.app/'
// const backend_api_local = 'http://localhost:3000/'

export const API = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: backend_api_local}),
    reducerPath: "main",
    tagTypes: [],
    endpoints: (build) => ({
        postMessage: build.mutation({
            query: (payload) => ({
                url: "message/gpt",
                method: "POST",
                body: payload,
            }),
        }),
        postLogin: build.mutation({
            query: (payload) => ({
                url: "login/accounts",
                method: "POST",
                body: payload,
            }),
        }),
        postSignUp: build.mutation({
            query: (payload) => ({
                url: "signup/accounts",
                method: "POST",
                body: payload,
            }),
        }),
    }),
});

export const {
    usePostMessageMutation,
    usePostLoginMutation,
    usePostSignUpMutation,
} = API;
