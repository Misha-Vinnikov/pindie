"use client"
import { useGetDataByCategory } from "../api/api-hocks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection.jsx";

export default function Popular() {
  const popularGames = useGetDataByCategory(endpoints.games,"popular");
  return (
    <main className={"main"}>
      <CardsListSection id="popular" title="Популярные" data={popularGames} />
    </main>
  );
}