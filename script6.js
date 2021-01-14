'use strict';
console.clear();
{
    let year = 2020;
    let month = 4; //May(0から始まるから)

    function getCalendarHead(){
        const dates = [];
        const d = new Date(year, month, 0).getDate()
        const n = new Date(year, month, 1).getDay();
        
        for (let i = 0; i < n; i ++) {
        //  dates.unshift(d-i);
        //make objects for, get class ="a"..To suru   
         dates.unshift({
             date: d-i,
             isToday: false,
             isDisabled: true,
         });   
        }
        return dates;
        // console.log(dates);
    }

    
    //関数を作って、宣言を一つにまとめる
    function getCalendarBody() {
        const dates = []; //day: Youbi
        const lastDate = new Date(year, month + 1, 0).getDate();
        //範囲を決めるときに、for構文を使う,　面倒だからループ
        for(let i = 1; i <= lastDate; i++) {
            // dates.push(i);
            //change it into object, look into Vuejs syntax
            dates.push({
                data: i,
                isToday: false,
                isDisabled: false
            });
        }
        // console.log(dates);
        return dates;
    }
    function getCalendarTail () {
        const dates = [];
        //代入して、新しい宣言、値をいれる
        const lastDay = new Date(year, month +1, 0).getDay();

        for (let i = 1; i < 7 - lastDay; i++) {
            //push means here:add dates to i、オブジェクトを配列のように使う
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            });
        }
        // console.log(dates);
        return dates;
    }
    //宣言された関数の中に、引数のdatesのオブジェクトの中に関数を入れた
    function createCalendar() {
        const dates = [
            ///スプレッド構文
            ...getCalendarHead(),
            ...getCalendarBody(),
            ...getCalendarTail(),
        ];

        const weeks = [];
        const weeksCount = dates.length / 7;

        for (let i = 0; i < weeksCount; i++) {
        weeks.push(dates.splice(0, 7));
        }

        // console.log(dates);
        weeks.forEach(week => {
            //('element')を宣言する、createElement
            const tr = document.createElement('tr');
            week.forEach(date => {
            //子から親への流れ    
                const td = document.createElement('td');
            // date: i?    
                td.textContent = date.date;
                if (date.isToday) {
                    //add element, class
                    td.classList.add('today');
                }
                if (date.isDisabled) {
                     //add element, class
                    td.classList.add('disabled');
                }
                //append;add tr to add
                tr.appendChild(td);
            });
            document.querySelector('tbody').appendChild(tr);
        });
    }
    createCalendar();
    //instance?関数を呼び出す、スコープ外に書く?
    // getCalendarBody();
    //For const dates
    // getCalendarHead();
    // getCalendarTail();
}