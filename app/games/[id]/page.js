"use client";
import { endpoints } from "@/app/api/config";
import {
  getMe,
  getNormalizedGameDataById,
  isResponseOk,
  getJWT,
  removeJWT,
  vote,
  checkIsUserVoted,
} from "@/app/api/api-utils";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { useState, useEffect, useContext } from "react";

import Styles from "./Game.module.css";
import { useStore } from "@/app/store/app-store";

export default function GamePage(props) {
  const [game, setGame] = useState(null);
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [isVoted, setIsVoted] = useState(false);
  const authContext = useStore;

  useEffect(() => {
    async function fetchData() {
      const game = await getNormalizedGameDataById(
        endpoints.games,
        props.params.id
      );
      isResponseOk(game) ? setGame(game) : setGame(null);
      setPreloaderVisible(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (game && authContext.user) {
      setIsVoted(checkIsUserVoted(game.users, authContext.user.id));
    }else{
      setIsVoted(false);
    }
  }, [authContext.user]);

  const handleVote = async () => {
    const jwt = authContext.token;
    console.log(authContext.token);
    if (jwt) {
      let usersIdArrays = game.users.length
      ? game.users.map((user) => user.id)
      : [];
    usersIdArrays.push(authContext.user.id);
    const response = await vote(
      `${endpoints.games}/${game.id}`,
      jwt,
      usersIdArrays
    );

    if (isResponseOk(response)) {
      setIsVoted(true);
      setGame(() => { 
        return {
        ...game, 
        users: [...game.users, authContext.user],
      }
    });
    } else{
     authContext.openPopup();
    } 
    };
    

  return (
    <main className="main">
      {game ? (
        <>
          <section className={Styles["game"]}>
            <iframe className={Styles["game__iframe"]} src={game.link}></iframe>
          </section>
          <section className={Styles["about"]}>
            <h2 className={Styles["about__title"]}>{game.title}</h2>
            <div className={Styles["about__content"]}>
              <p className={Styles["about__description"]}>{game.description}</p>
              <div className={Styles["about__author"]}>
                <p>
                  Автор:
                  <span className={Styles["about__accent"]}>
                    {game.developer}
                  </span>
                </p>
              </div>
            </div>
            <div className={Styles["about__vote"]}>
              <p className={Styles["about__vote-amount"]}>
                За игру уже проголосовали:{" "}
                <span className={Styles["about__accent"]}>
                  {game.users.length}
                </span>
              </p>
                <button
                  disabled={isVoted}
                  className={`button ${Styles["about__vote-button"]}`}
                  onClick={handleVote}
                >
                  {isVoted ? "Голос учтён" : "Голосовать"}
                </button>
            </div>
          </section>
        </>
      ) : preloaderVisible ? (
        <Preloader />
      ) : (
        <GameNotFound />
      )}
    </main>
  );
      }}
