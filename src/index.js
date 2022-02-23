import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "assets/css/Common";
import { CssBaseline } from "@material-ui/core";
import { initFacebookSdk } from "initFacebookSdk";
import { ConfirmProvider } from "material-ui-confirm";

// initFacebookSdk().then(startApp);
// function startApp() {
//   return (
//     (
//       <Provider store={store}>
//         <BrowserRouter>
//           <PersistGate loading={null} persistor={persistor}>
//             <CssBaseline />
//             <ThemeProvider theme={theme}>
//               <App />
//             </ThemeProvider>
//           </PersistGate>
//         </BrowserRouter>
//       </Provider>
//     ),
//     document.getElementById("root")
//   );
// }
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <ConfirmProvider>
            <App />
          </ConfirmProvider>
        </ThemeProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
