import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const api = axios.create({
  // Read from the environment variable or use the default value
  baseURL: API_URL + "/api",
});

export type Response<T> = {
  data: {
    attributes: T;
  }[];
};

export type SingleResponse<T> = {
  data: {
    attributes: T;
  };
};
export type Company = {
  name: string;
  description?: string;
  email: string;
  logo: {
    url: string;
    name: string;
  };
  address: string;
  page: [
    {
      id: number;
      name: string;
      sku: string;
      mainPage: boolean;
    }
  ];
};

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
  const { data } = await api.get<Response<Category>>(
    "/categories?populate=image"
  );
  // Map the response to only return the attributes
  let categories = data.data.map((category: any) => category.attributes);
  categories = categories.map(
    (category: any) =>
      (category = {
        name: category.name,
        sku: category.sku,
        image: {
          url: category.image.data.attributes.url,
          name: category.image.data.attributes.alternativeText,
        },
      })
  );
  return categories;
}

export async function getCompany(): Promise<Company> {
  const { data } = await api.get<SingleResponse<any>>("/company?populate=*");
  let _company: Company = {
    name: data.data.attributes.name,
    email: data.data.attributes.email,
    address: data.data.attributes.address,
    logo: {
      url: API_URL + data.data.attributes.logo.data.attributes.url,
      name: data.data.attributes.logo.data.attributes.alternativeText,
    },
    description: data.data.attributes.description,
    page: data.data.attributes.page,
  };
  return _company;
}

export type Contact = {
  label: string;
  value: string;
  url: string;
  onCTA: boolean;
  type?: string;
  icon?: {
    url: string;
    name: string;
  };
};

export async function getContacts(onCTA: boolean = true, image: boolean = true): Promise<Contact[]> {
  const { data } = await api.get<Response<Contact>>(
    `/contacts?filters[onCTA][$eq]=${onCTA}${image ? "&populate=icon" : ""}`
  );
  // Map the response to only return the attributes
  let contacts = data.data.map((contact: any) => contact.attributes);
  contacts = contacts.map((contact: any) => {
    return {
      label: contact.label,
      value: contact.value,
      url: contact.url,
      onCTA: contact.onCTA,
      type: contact.type,
      icon: contact.icon ? (contact.icon.data ? {
        url: API_URL + contact.icon.data.attributes.url,
        name: contact.icon.data.attributes.alternativeText,
      } : null) : null,
    };
  });
  return contacts;
}
