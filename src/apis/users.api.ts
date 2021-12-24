import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUserRequest } from "../dto/create-user-request.dto";
import { User } from "../models/User";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/users",
  }),
  endpoints: (build) => ({
    createUser: build.mutation<User, CreateUserRequest>({
      query: (createUserRequest) => ({
        url: "/",
        method: "POST",
        body: createUserRequest,
      }),
    }),
    getUser: build.query<User, undefined>({
      query: () => ({ url: "/" }),
    }),
  }),
});

export const { useCreateUserMutation, useGetUserQuery } = usersApi;
