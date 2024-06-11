// src/utils/priceUtils.js
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
  };

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US').format(number);
};