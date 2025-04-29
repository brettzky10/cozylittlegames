import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useGame = (gameId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    `/api/games/${gameId}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, isLoading, mutate };
};

export default useGame;