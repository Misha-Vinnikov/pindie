"use client"
import { useGetDataByCategory } from "../api/api-hocks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection.jsx";

export default function Shooter() {
  const shooterGames = useGetDataByCategory(endpoints.games,"shooter");
  return (
    <main className={"main"}>
      <CardsListSection id="shooter" title="Шутеры" data={shooterGames}/>
    </main>
  );
}
