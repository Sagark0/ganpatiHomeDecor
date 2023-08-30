import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// material ui
import { createTheme, ThemeProvider } from "@mui/material";

import Homepage from "./pages/homepage";
import Footer from "./components/footer";
import { Decor } from "./pages/decor";
import AppLayout from "./appLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<AppLayout />>
      <Route index element={<Homepage />} />
      <Route path="decor" element={<Decor />} />
    </Route>
  )
);
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
