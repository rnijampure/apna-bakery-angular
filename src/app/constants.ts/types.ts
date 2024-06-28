export type productType = {
  id: string | number;
  name: string;
  src: string;
  description: string;
  price: number;
  starRating: number;
  category: Array<string>;
};
export type cartitem = {
  item: productType;
  quantity: number;
  date: string | Date;
  totalPrice: number;
  grandTotal: number;
};
