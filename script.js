window.onload = function() {

    // --- ① URLから「合言葉」を抜き出す ---
    const urlParams = new URLSearchParams(window.location.search);
    const getParam = urlParams.get('item'); // 「?item=〇〇」の〇〇を取得

    // --- ② もしURLに合言葉があったら、スマホの保存箱にメモする ---
    if (getParam) {
        // 保存箱（LocalStorage）に「このアイテム=持ってる」と書き込む
        localStorage.setItem(getParam, "true");
    }

    // --- ③ 保存箱をチェックして、持っているアイテムの画面を明るくする ---
    // 剣(sword)を持っているかチェック
    if (localStorage.getItem("適当な画像") === "true") {
        // HTMLの id="sword" を見つけて、CSSの "got" クラスを合体させる
        document.getElementById("human").classList.add("got");
    }

    // 盾(shield)を持っているかチェック
    if (localStorage.getItem("kaba") === "true") {
        // HTMLの id="shield" を見つけて、CSSの "got" クラスを合体させる
        document.getElementById("kaba").classList.add("got");
    }
}