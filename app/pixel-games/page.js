"use client"
import { useGetDataByCategory } from "../api/api-hocks";
import { endpoints } from "../api/config";
import { CardsListSection } from "../components/CardsListSection/CardsListSection.jsx";

export default function Pixel() {
  const pixelGames = useGetDataByCategory(endpoints.games,"pixel");
  return (
    <main className={"main"}>
      <CardsListSection id="pixel" title="Пиксельные" data={pixelGames}/>
    </main>
  );
}