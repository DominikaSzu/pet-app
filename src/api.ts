type RequestOptions = {
    method?: 'GET' | 'POST',
    queryParams?: {[k: string]: string},
}

const API_BASE_URL = "http://www.omdbapi.com";

const requestData = async ({ method, queryParams }: RequestOptions = { method: 'GET' }) => {
    const params = {
        apikey: import.meta.env.VITE_API_KEY,
        ...queryParams,
    }

    const endpoint = `${API_BASE_URL}?${new URLSearchParams(params)}`;
    const response = await fetch(endpoint, {
        method: method || 'GET',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return await response.json();
}

export const fetchFilmsByTitle = async (search?: string) => await requestData({ queryParams: !!search ? {s: search} : {}});
