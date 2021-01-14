'use strict';

{
    //ボタンの要素を取得する。
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        // const results = ['大吉','中吉','小吉','凶']; div'1
        // const results = ['大吉','中吉','小吉','凶','大吉','大吉','大吉']; div'2
        //  const n = Math.floor(Math.random() * 4); div'1
        //  btn.textContent = results[n]; div'1
        // btn.textContent = results[Math.floor(Math.random() * results.length)]; div'2
        const n = Math.random;
        // 
        if(0.9 <= n){
            btn.textContent = 'Daikichi';
        } else if (0.7 <= n) {
            btn.textContent = 'tyukichi';
        } else if (0.2 <= n) {
            btn.textContent = 'shoukichi';
        } else {
            btn.textContent = 'kyou';
        }
        

        
    });
    
}
