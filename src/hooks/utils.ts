//@ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

type AddParamsProps = {
    paramsArray: SingleParam[];
    endpoint: string;
};

export type SingleParam = Record<string, string>;

export const addParams = ({ paramsArray, endpoint }: AddParamsProps) => {
    if (!paramsArray || paramsArray.length < 1) {
        return "";
    }

    let url = new URL(endpoint);
    const urlSearchParams = new URLSearchParams(url.search);

    paramsArray.map((param) => {
        if (!urlSearchParams.has(param.key)) {
            urlSearchParams.append(param.key, param.value);
        }
    });

    return `&${urlSearchParams.toString()}`;
};