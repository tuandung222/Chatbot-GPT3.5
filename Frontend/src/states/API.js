import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const backend_url = 'https://backend-cinnamon-test.up.railway.app/'
const backend_url = 'https://backend-cinnamon-test.up.railway.app/'

export const API1 = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: backend_url + 'message'}),
    reducerPath: "message",
    tagTypes: [],
    endpoints: (build) => ({
        postMessage: build.mutation({
            query: (payload) => ({
                url: "gpt",
                method: "POST",
                body: payload,\
                mode: 'no-cors'
            }),
        }),
    }),
});

const API2 = createApi({    
    baseQuery: fetchBaseQuery({ baseUrl: backend_url + 'login'}),
    reducerPath: "login",
    tagTypes: [],
    endpoints: (build) => ({
        postLogin: build.mutation({
            query: (payload) => ({
                url: "accounts",
                method: "POST",
                body: payload,
                mode: 'no-cors'
            }),
        }),
    }),
});
const API3 = createApi({    
    baseQuery: fetchBaseQuery({ baseUrl: backend_url + 'signup'}),
    reducerPath: "signup",
    tagTypes: [],
    endpoints: (build) => ({
        postLogin: build.mutation({
            query: (payload) => ({
                url: "accounts",
                method: "POST",
                body: payload,
                mode: 'no-cors'
            }),
        }),
    }),
});

export const usePostMessageMutation = API1.endpoints.postMessage.useMutation;
export const usePostLoginMutation = API2.endpoints.postLogin.useMutation;
export const usePostSignUpMutation = API3.endpoints.postLogin.useMutation;


