// 全ポケモンのデータを取得
export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    // fetchは、APIからデータを取得する関数
    // Promiseが返ってくる
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};

// 各ポケモンの詳細情報を取得
export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};
