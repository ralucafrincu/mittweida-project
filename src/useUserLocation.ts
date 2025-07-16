import useSWR from "swr";

function getLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation not supported"));
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                resolve([latitude, longitude]);
            },
            (err) => {
                reject(err);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    });
}

export function useUserLocation() {
    const { data, error, isLoading } = useSWR("user-location", getLocation, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
    });

    return {
        userLocation: data,
        isLoading,
        isError: !!error,
    };
}
