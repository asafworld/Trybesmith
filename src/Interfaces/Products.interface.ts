export interface Product {
  name: string,
  amount: string
}

export interface RegisteredProduct {
  id: number,
  name: string,
  amount: string,
  orderId: number | null,
}