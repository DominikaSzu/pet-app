import { fetcher } from "../utils";
import useSWR from "swr";

type Props = {
  query: string;
};

export const useFetch = ({ query }: Props) => {
  const { data, isLoading, error } = useSWR(
    `http://www.omdbapi.com/?s=${query}&apikey=${import.meta.env.VITE_API_KEY}`,
    fetcher,
  );

  return {
    films: data.Search,
    isLoading,
    error,
  };
};
