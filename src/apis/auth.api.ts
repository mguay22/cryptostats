import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginRequest } from "../dto/login-request.dto";
import { User } from "../models/User";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/auth",
  }),
  endpoints: (build) => ({
    login: build.mutation<User, LoginRequest>({
      query: (loginRequest) => ({
        url: "/login",
        method: "POST",
        body: loginRequest,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
