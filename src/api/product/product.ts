import api from '@/api';

export async function getAllProducts() {
  const products = await api('products', 'GET');
  return products;
}

export async function getProductDetails(id: string) {
  const products = await api(`product/${id}`, 'GET');
  return products;
}
