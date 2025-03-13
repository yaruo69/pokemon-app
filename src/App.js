import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  // useEffectは、第二引数に[]を設定することで、初回レンダリングの時のみに実行。
  useEffect(() => {
    // asyncをつけることで、その関数が非同期処理になる。
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      // awaitは、Promiseが解決するのを待ってから、次の処理を実行する形にできる。
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    // Promise.allは、複数の非同期処理(Promise)を並列して実行し、すべての完了を待つ関数。
    // 成功すると、結果を配列で返す。
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>ロード中・・・</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
