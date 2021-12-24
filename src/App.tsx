import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import "./index.css";
import { Routes } from "./routes/routes";
import { useGetUserQuery } from "./apis/users.api";
import { useAppDispatch } from "./app/hooks";
import { useNavigate } from "react-router";
import { setAuthState } from "./slices/auth.slice";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const { data: user } = useGetUserQuery(undefined);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(setAuthState({ user }));
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
