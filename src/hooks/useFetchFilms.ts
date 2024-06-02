import { useFetch } from "./useFetch";

type Props = { query: string };

export const useFetchFilmsByTitle = ({ query = "" }: Props) => {
  const requestParams = [{ key: "s", value: query }];

  const { films, isLoading, error } = useFetch({ requestParams });

  return { films, isLoading, error };
};
