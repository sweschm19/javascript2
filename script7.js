'use strict';
{
    //id wo getElementById, Sengen  
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const resume = document.getElementById('resume');

    //insert value again, 再代入する関数
    let startTime;
    let timeoutId;
    let elapsedTime = 0;

    //関数を定義する "Yobidashi func"に対して
    function countUp() {
      //make instance,and use method:Date(here)
      const d = new Date(Date.now() - startTime);
      const m = String(d.getMinutes()).padStart(2, '0');
      const s = String(d.getSeconds()).padStart(2, '0');
      const ms = String(d.getMilliseconds()).padStart(3, '0');
      //use text template riteral
      timer.textContent = `${m}:${s}:${ms}`;
    timeoutId = setTimeout(() =>　{
         //put　関数を下に入れ込む  
        countUp();
      }, 10);
    }

    function setButtonStateInitial() {
      start.classList.remove('inactive');
      stop.classList.add('inactive');
      resume.classList.add('inactive');
    }

    function setButtonStateRunning() {
      start.classList.add('inactive');
      stop.classList.remove('inactive');
      resume.classList.add('inactive');
    }

    function setButtonStateStopped() {
      //id.method?.method-action? ('x') x:疑似クラス的なものを設定
      start.classList.remove('inactive');
      stop.classList.add('inactive');
      resume.classList.remove('inactive');
    }
    //関数の宣言の呼び出し？
    setButtonStateInitial();

    //insert value again, 再代入する関数
    // let startTime;
    // let timeoutId;
    // let elapsedTime = 0;

    //class.add..'click', () => arro function
        start.addEventListener('click', () => {
          if (start.classList.contains('inactive') === true) {
            return;
          }

          setButtonStateRunning();  
        startTime = Date.now();    
        countUp();    
    });
        stop.addEventListener('click', () => {
          if (stop.classList.contains('inactive') === true) {
            return;
          }

          setButtonStateStopped();
          //pass timeoutI as argement
            clearTimeout(timeoutId);
            elapsedTime += Date.now() - startTime;
    });
        resume.addEventListener('click', () => {
          //先にCSSで設定、HTMLには描かない
          if (resume.classList.contains('inactive') === true) {
            return;
          }

          setButtonStateInitial();
            timer.textContent = '00:00.000';
            elapsedTime = 0;
    });

}

