window.onload = function() {

    // ① URLから「?item=〇〇」の〇〇をチェックする
    const urlParams = new URLSearchParams(window.location.search);
    const getParam = urlParams.get('item'); 

    // ② 読み込んだ合言葉を保存する
    if (getParam) {
        localStorage.setItem(getParam, "true");
    }

    // ゲットした数を数えるためのカウンター
    let gotCount = 0;

    // ③ 「剣」を持っているかチェック
    if (localStorage.getItem("kaba") === "true") {
        document.getElementById("kaba").classList.add("got");
        gotCount = gotCount + 1; // 持っていたらカウントを1増やす
    }

    // ④ 「盾」を持っているかチェック
    if (localStorage.getItem("human") === "true") {
        document.getElementById("human").classList.add("got");
        gotCount = gotCount + 1; // 持っていたらカウントを1増やす
    }
    
    // 画面の数字（0 / 2）を、実際のカウント（gotCount）に書き換える
    const countElement = document.getElementById("progress-count");
    if (countElement) {
        countElement.innerText = gotCount;
    }

    // メーターの長さを計算して伸ばす
    const barElement = document.getElementById("progress-bar");
    if (barElement) {
        const totalItems = 2; // アイテムの総数
        const percent = (gotCount / totalItems) * 100;
        barElement.style.width = percent + "%";
    }
}