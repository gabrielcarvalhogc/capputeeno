import { ProductFetchResponse } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL,{ query: `
  query {  
    getProduct (id: "${productId}"){
      name
      description
      category
      price_in_cents
      image_url
    }
  }
  ` })
}

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['pruduct', id],
    enabled: !!id,
    staleTime: 1000 * 60 * 5
  });

  return {
    data: data?.data?.data?.getProduct
  }
}