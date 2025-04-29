import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useGameList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/games", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, error, isLoading, mutate };
};

export default useGameList;
