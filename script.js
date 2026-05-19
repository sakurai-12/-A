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
   
    //カウンター
    let gotcount = 0;

    // --- ③ 保存箱をチェックして、持っているアイテムの画面を明るくする ---
    // humanを持っているかチェック
    if (localStorage.getItem("human") === "true") {
        // HTMLの id="human" を見つけて、CSSの "got" クラスを合体させる
        document.getElementById("human").classList.add("got");
    }

    // kabaを持っているかチェック
    if (localStorage.getItem("kaba") === "true") {
        // HTMLの id="kaba" を見つけて、CSSの "got" クラスを合体させる
        document.getElementById("kaba").classList.add("got");
    }
    //  ⑤ 達成率の表示を更新する
    // 画面の数字を書き換える (例: 1 / 2)
    document.getElementById("progress-count").innerText = gotCount;

    // メーターの長さを計算して伸ばす (0個なら0%、1個なら50%、2個なら100%)
    const totalItems = 2; // アイテムの総数
    const percent = (gotCount / totalItems) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
}