import useSWR from "swr";
import { SingleParam, addParams, fetcher } from "./utils";

type Props = { requestParams: SingleParam[] };

export const useFetch = ({ requestParams }: Props) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const endpoint = "http://www.omdbapi.com/";

    const searchParams = addParams({
        paramsArray: requestParams,
        endpoint,
    });

    const { data, isLoading, error } = useSWR(
        `http://www.omdbapi.com/?apikey=${apiKey}${searchParams}`,
        fetcher,
    );

    return {
        films: data?.Search,
        isLoading,
        error,
    };
};
