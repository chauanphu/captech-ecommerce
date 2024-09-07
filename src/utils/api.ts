import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:1337/api',
});

export type Response<T> = {
  data: {
    attributes: T;
  }[];
}

export type Category = {
  sku: string;
  name: string;
  image: {
    url: string;
    name: string;
  };
};

// Get all categories
export async function getCategories(): Promise<Category[]> {
  const { data } = await api.get<Response<Category>>('/categories?populate=image');
  // Map the response to only return the attributes
  let categories = data.data.map((category: any) => category.attributes);
  categories = categories.map((category: any) => category = {
    name: category.name,
    sku: category.sku,
    image: {
      url: category.image.data.attributes.url,
      name: category.image.data.attributes.alternativeText
    }
  });
  console.log(categories);
  return categories;
}