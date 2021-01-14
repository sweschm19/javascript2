'use strict';

{
  function setWord() {
    //(,1)[0](添字？)
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    // word = words[Math.floor(Math.random() * words.length)];
    target.textContent = word;
    locate = 0;
  }  

  const words = [
      'red',
      'blue',
      'green',
      'azure',
      'yellow',
      'black',
      'brown',
    ];
    //change const into let, for re-insert, 初期化するため、constと組み合わせて使う。
    let word;
    let locate = 0;
    let startTime;
    let isPlaying = false;

    //search for later
    const target = document.getElementById('target');
    // const target2 = document.getElementById('target2');
    //word =(insert) words
    // word = words[Math.floor(Math.random() * words.length)];
    // target.textContent = word;
    //関数の呼び出し、関数を定義したため
    // setWord();

    document.addEventListener('click', () => {
      if (isPlaying === true) {
        return;
      }
      isPlaying = true;
      startTime = Date.now();
      //use arro function
      setWord();
    });
    
    document.addEventListener('keydown', e => {
        //e.key !==(false) word..に書き換える、returnより
        if (e.key !== word[locate]) {
         return;   
        }
        //increase 1
        locate++;
        target.textContent = '_'.repeat(locate) + word.substring(locate);
　　　　　//条件を設定して、、、
        if (locate === word.length) {
          //condition x.y(method?) === 0
          if (words.length === 0) {
            const elapsedTime = ((Date.now()- startTime) / 1000).toFixed(2);
            //html elementの中身が空の状態で、要素を追加する。
            const result = document.getElementById('result');
            //id.method
            result.textContent = `finished${elapsedTime} seconds!`;
            //処理を終わらせる
            return;
          }
          //関数の呼び出し、関数を上か？定義する。
          setWord();
        }

    });
}