import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { OrderContextProvider } from "./contexts/order";
import { Router } from "./router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
          <ToastContainer position="bottom-right" />
        </OrderContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
