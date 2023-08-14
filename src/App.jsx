import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import QuestionPaper from './pages/questionPaper'

// material ui
import { createTheme, ThemeProvider } from '@mui/material';
import Homepage from "./pages/homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Homepage />} />
      <Route path="questions" element={<QuestionPaper />} />
    </Route>
  )
)
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif'
  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App
