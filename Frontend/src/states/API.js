import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const API = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: }),
    reducerPath: "main",
    tagTypes: [],
    endpoints: (build) => ({
        postMessage: build.mutation({
            query: (payload) => ({
                url: "message",
                method: "POST",
                body: payload,
            }),
        }),
        postLogin: build.mutation({
            query: (payload) => ({
                url: "auth/login",
                method: "POST",
                body: payload,
            }),
        }),
        postSignUp: build.mutation({
            query: (payload) => ({
                url: "auth/signup",
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
