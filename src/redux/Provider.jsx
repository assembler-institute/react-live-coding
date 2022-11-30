// En el provider es el elemento engloba la aplicación de forma similar al provider del context

import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

// la única diferencia va a ser que devolvemos la store y tenemos que acceder a ella

const Provider = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
