export const currencyFormatter = (amount: string ) => {
   return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL'
   }).format(parseFloat(amount));
};