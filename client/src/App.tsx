import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { useState } from "react";
import Home from "./pages/home/Home";
import { lightTheme, darkTheme } from "./pages/home/Theme";
import Register from "./pages/home/forms/Register";
import ThemeButton from "./components/ThemeButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const light = createTheme(lightTheme);
  const dark = createTheme(darkTheme);
  const theme = darkMode ? dark : light;
  const url1 =
    "https://images.pexels.com/photos/6954156/pexels-photo-6954156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const url2 =
    "https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const url = darkMode ? url1 : url2;

  function handleToggleTheme() {
    setDarkMode((prev) => !prev);
  }

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
