import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useBackendLocation() {
    const { data, error, isLoading, mutate } = useSWR("http://localhost:3001/location", fetcher);

    return {
        location: data,
        isLoading,
        isError: !!error,
        mutate,
    };
}
