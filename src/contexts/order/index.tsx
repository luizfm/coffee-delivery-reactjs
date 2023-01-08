import { createContext, ReactNode, useCallback, useReducer } from "react";
import { toast } from "react-toastify";
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
  updateProductQuantity: (id: string, quantity: number) => void;
  clearStateInfo: () => void;
};

const orderContextInitialValues: ContextProps = {
  ...orderInitialState,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  updateProductQuantity: () => {},
  clearStateInfo: () => {},
};

export const OrderContext = createContext(orderContextInitialValues);

interface OrderContextProvider {
  children: ReactNode;
}

export function OrderContextProvider({ children }: OrderContextProvider) {
  const [state, dispatch] = useReducer(orderReducer, orderInitialState);

  const addProductToCart = useCallback((product: Product) => {
    dispatch({ type: OrderActionsKind.AddToCart, payload: product });
    toast("O produto foi adicionado ao carrinho");
  }, []);

  const removeProductFromCart = useCallback((id: string) => {
    dispatch({ type: OrderActionsKind.RemoveFromCart, payload: id });
    toast("O produto foi removido do carrinho");
  }, []);

  const updateProductQuantity = useCallback((id: string, quantity: number) => {
    dispatch({
      type: OrderActionsKind.UpdateQuantity,
      payload: { id, quantity },
    });
  }, []);

  const clearStateInfo = useCallback(() => {
    dispatch({ type: OrderActionsKind.ClearState });
  }, []);

  return (
    <OrderContext.Provider
      value={{
        ...state,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantity,
        clearStateInfo,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
