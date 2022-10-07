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

export interface UpdateOrders {
  productsIds: number[], 
  orderId: number,
  userId: number,
}

export interface Success {
  userId: number,
  productsIds: number[],
}