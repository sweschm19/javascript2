'use strict';

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('resume');
  
    let startTime;
  　//関数を定義する　
    function countUp() {
      console.log(Date.now() - startTime);
      //アロー関数が中に、
      setTimeout(() => {
        countUp();
        //,10m(-10*3)s)
      }, 10);
    }
    //('name of event', (argment) => {});  
    start.addEventListener('click', () => {
      startTime = Date.now();
      //関数
      countUp();
    });
}