"use client"
import { useGetDataByCategory } from "../api/api-hocks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection.jsx";

export default function Runner() {
  const runnerGames = useGetDataByCategory(endpoints.games,"runner");
  return (
    <main className={"main"}>
      <CardsListSection id="runner" title="Раннеры" data={runnerGames}/>
    </main>
  );
}