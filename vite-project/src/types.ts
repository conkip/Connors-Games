export type User = {
  _id: number,
  name: string,
  email?: string,
  pass?: string,
  isLoggedIn?: boolean,
  creditCard?: CreditCard
};

export type CreditCard = {
  type: string,
  number: string,
  exprDate: string,
  cvv: string
}