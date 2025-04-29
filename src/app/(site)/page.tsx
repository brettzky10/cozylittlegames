
//import { getGames } from "@/lib/actions/games";
import ClientHome from "@/components/Home";
//import { getFavoriteGames } from "@/lib/actions/favorites";
export default async function Home() {
  //const games = await getGames()
  //const favorites = await getFavoriteGames()

  return <ClientHome  /> /* initialFavorites={favorites} initialGames={games}*/
}