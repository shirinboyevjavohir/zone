import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    warning: {
      main: "#FA541C",
    },
    white: {
      main: "#ffffff",
    }
  },
});

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box>
          <Routes>
            <Route element={<Navbar />}>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
