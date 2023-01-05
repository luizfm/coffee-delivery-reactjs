import { produce } from "immer";

export enum OrderActionsKind {
  AddToCart = "ADD_TO_CART",
  RemoveFromCart = "REMOVE_FROM_CART",
  UpdateQuantity = "UPDATE_QUANTITY",
  SetAddress = "SET_ADDRESS",
  SetPaymentType = "SET_PAYMENT_TYPE",
}

type ActionPayloadType = {
  type: string;
  payload: unknown;
};

export enum PaymentTypeKind {
  DebitCard = "DEBIT_CARD",
  CreditCard = "CREDIT_CARD",
  Money = "MONEY",
}

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  pictureUrl: string;
};

export type Address = {
  zipCode: number | null;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
};

export type OrderReducerState = {
  products: Product[];
  paymentType: PaymentTypeKind | null;
  address: Address;
};

export const orderInitialState = {
  products: [],
  paymentType: null,
  address: {
    zipCode: null,
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    uf: "",
  },
};

export const orderReducer = (
  state: OrderReducerState,
  action: ActionPayloadType
) => {
  switch (action.type) {
    case OrderActionsKind.AddToCart: {
      const payload = action.payload as Product;
      return produce(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (product) => product.id === payload.id
        );

        if (productIndex < 0) {
          draft.products.push(payload as Product);
          return;
        }

        draft.products[productIndex].quantity += payload.quantity;
      });
    }
    case OrderActionsKind.RemoveFromCart: {
      const id = action.payload as string;
      console.log(id, state);
      return produce(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (product) => product.id === id
        );

        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
      });
    }
    case OrderActionsKind.UpdateQuantity: {
      const { id, quantity } = action.payload as Pick<
        Product,
        "id" | "quantity"
      >;
      return produce(state, (draft) => {
        const productIndex = draft.products.findIndex(
          (product) => product.id === id
        );
        draft.products[productIndex].quantity = quantity;
      });
    }
    case OrderActionsKind.SetAddress: {
      return produce(state, (draft) => {
        draft.address = action.payload as Address;
      });
    }
    case OrderActionsKind.SetPaymentType: {
      return produce(state, (draft) => {
        draft.paymentType = action.payload as PaymentTypeKind;
      });
    }
    default:
      return state;
  }
};
