"use client"
import { useGetDataByCategory } from "../api/api-hocks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection.jsx";

export default function TDS() {
  const tdsGames = useGetDataByCategory(endpoints.games,"TDS");
  return (
    <main className={"main"}>
      <CardsListSection id="TDS" title="TDS" data={tdsGames}/>
    </main>
  );
}
