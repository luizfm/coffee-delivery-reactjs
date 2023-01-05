import { createContext, ReactNode, useCallback, useReducer } from "react";
import {
  OrderActionsKind,
  orderInitialState,
  orderReducer,
  OrderReducerState,
  Product,
} from "../../reducers/order";

type ContextProps = OrderReducerState & {
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (id: string) => void;
};

const orderContextInitialValues: ContextProps = {
  ...orderInitialState,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
};

export const OrderContext = createContext(orderContextInitialValues);

interface OrderContextProvider {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProvider) {
  const [state, dispatch] = useReducer(orderReducer, orderInitialState);

  const addProductToCart = useCallback((product: Product) => {
    dispatch({ type: OrderActionsKind.AddToCart, payload: product });
  }, []);

  const removeProductFromCart = useCallback((id: string) => {
    console.log("aqui", id);
    dispatch({ type: OrderActionsKind.RemoveFromCart, payload: id });
  }, []);

  return (
    <OrderContext.Provider
      value={{ ...state, addProductToCart, removeProductFromCart }}
    >
      {children}
    </OrderContext.Provider>
  );
}
