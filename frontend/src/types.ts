export interface ICartItems {
  id: number;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  price?: number;
  qty?: number;
}

export interface ICart {
  cartItems: ICartItems[];
  shippingAddress: {};
  paymentMethod: string;
  itemsTotalPrice?: number;
  shippingTotalPrice?: number;
  taxTotalPrice?: number;
  totalFinalPrice?: number;
}

export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating?: number;
  numReviews: number;
  qty?: number;
}
