
import { useEffect } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  // useEffectは、第二引数に[]を設定することで、初回レンダリングの時のみに実行。
  useEffect(() => {
    // asyncをつけることで、その関数が非同期処理になる。
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      // awaitは、Promiseが解決するのを待ってから、次の処理を実行する形にできる。
      let res = await getAllPokemon(initialURL);
      console.log(res);
    }
    fetchPokemonData()
  }, [])

  return <div className="App"></div>;
}

export default App;
