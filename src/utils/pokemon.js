export const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        // fetchは、APIからデータを取得する関数
        // Promiseが返ってくる
        fetch(url).then((res) => res.json()).then((data) => resolve(data));
    })
}