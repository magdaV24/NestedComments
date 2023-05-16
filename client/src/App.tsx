import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import React, { useState } from "react";
import Home from "./pages/home/Home";
import { lightTheme, darkTheme } from "./pages/home/Theme";
import Register from "./pages/home/forms/Register";
import ThemeButton from "./components/ThemeButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const light = createTheme(lightTheme);
  const dark = createTheme(darkTheme);
  const theme = darkMode ? dark : light;
  const url1 =
    "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const url2 =
    "https://images.pexels.com/photos/11216257/pexels-photo-11216257.jpeg?auto=compress&cs=tinysrgb&w=600";
  const url = darkMode ? url1 : url2;

  function handleToggleTheme() {
    setDarkMode((prev) => !prev);
  }

  // Apollo Client

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register url={url} />} />
            </Routes>
          </BrowserRouter>
          <ThemeButton handleToggleTheme={handleToggleTheme} />
        </CssBaseline>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
