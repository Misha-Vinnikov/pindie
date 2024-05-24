"use client";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection.jsx";
import { useGetDataByCategory } from "../api/api-hocks";

export default function New() {
  const newGames = useGetDataByCategory(endpoints.games,"new");
  return (
    <main className={"main"}>
      <CardsListSection id="new" title="Новинки" data={newGames} />
    </main>
  );
}