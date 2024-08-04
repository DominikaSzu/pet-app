import useSWR from "swr";
import { fetcher } from "./utils";

type params = Record<string, string>;

export const useFetch = ({ requestParams }: params) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const endpoint = "http://www.omdbapi.com/";

  const search = `?${new URLSearchParams(requestParams)}`;

  const { data, isLoading, error } = useSWR(
    `${endpoint}?apikey=${apiKey}${search}`,
    fetcher,
  );

  return {
    films: data?.Search,
    isLoading,
    error,
  };
};
