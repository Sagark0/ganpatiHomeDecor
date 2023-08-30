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
import { Decor } from "./pages/decor";
import AppLayout from "./appLayout";
import Contact from "./pages/contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Homepage />} />
      <Route path="decor" element={<Decor />} />
      <Route path="contact" element={<Contact />} />
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
    </ThemeProvider>
  );
}

export default App;
