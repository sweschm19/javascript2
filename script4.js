{
  //
  document.querySelector('ul').addEventListener('click', e => {
     if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
     }
  });
}
document.querySelector('form').addEventListener('submit', e=>{
  e.preventDefault();
  console.log('submit');
});
//div'7
// const text = document.querySelector('textarea');

// //  text.addEventListener('focus', ()=>{
// //    console.log('focus');
// //  });

// //  text.addEventListener('blur', ()=>{
// //    console.log('blur');
// //  });
// text.addEventListener('input', ()=>{
//   console.log(text.value.length);
// });

// text.addEventListener('change', ()=>{
//   console.log('change');
// });
//div'7
//div'6
// document.querySelector('button').addEventListener('dblclick', () => {
//   console.log('Double Clicked!');
// });
// //('x', e(Argement) => {});
// // document.addEventListener('mousemove', e => {
// //   console.log(e.clientX, e.clientY);
// // });

// document.addEventListener('keydown', e =>{
//   console.log(e.key);
// });
//div'6
  //div'5 
    //Teisuu select several element
  //   const colors = document.querySelectorAll('input');
  //   //スコープといって、colors..より上で宣言しないとエラーになる
  //   let selectedColor;
  //   //Think array.forEach(element =>{});
  //   colors.forEach(color => {
  //     if (color.checked === true) {
  //       selectedColor = color.value;
  //     }
  //   });
  //   const li = document.createElement('li');
  //   li.textContent = selectedColor;
  //   document.querySelector('ul').appendChild(li);
  // });　div'5
//div'4
// const li = document.createElement('li');
//         //inputタグを作る
//         const text = document.querySelector('input');
//         li.textContent = text.value;
//         //ulの親にクエリを、このliに追加する
//         document.querySelector('ul').appendChild(li);
    
//         text.value = '';
//         text.focus();
  //div'4      
// div' 3
// document.querySelector('button').addEventListener('click', () => {
//     //要素をすべて取得する
//     const item1 = document.querySelectorAll('li')[1]

//     item1.remove();
//     // document.querySelectorAll('ul').removeChild(item1);
// });
//
//
//div'2
// const item0 = document.querySelectorAll('li')[0];
//         //文字もコピーする設定
//         const copyCat = item0.cloneNode(true);
        
//         const ul = document.querySelector('ul');
//         //リストの２番目に挿入する
//         const item2 = document.querySelectorAll('li')[2];
//         ul.insertBefore(copyCat, item2);
//div'2
//div'1
// //li、要素を取得する 
// const item2 = document.createElement('li');
// item2.textContent = 'item 2';

// // const ulNode = document.querySelector('ul');
// //親の要素を取得して
// const ul = document.querySelector('ul');
// //ulに子を追加する
// ul.appendChild(item2);
//div'1
// function update () {
//     document.getElementById('target').textContent = 'Change!';

// }
// //(name of function, 2000*m(-10*3)s)
// setTimeout(update, 1000);
//div' 要素を複製して、追加する
// 
//div'
//div'
//div'
//div'
//div'
//div'