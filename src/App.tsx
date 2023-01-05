import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { OrderContextProvider } from "./contexts/order";
import { Router } from "./router";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
