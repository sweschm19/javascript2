'use strict';

{
  document.querySelector('button').addEventListener('click', ()=> {
    
  });      
}
//div'1
// function update() {
//   document.getElementById('target').textContent = 'changed!';
// }
// //div' 1
 //div'2
 const targetNode = document.getElementById('target');
 //クラス属性を使うためには、x.yと”.”をつける
 targetNode.textContent = targetNode.dataset.translation;
//div'2
// //div'

// //div'
// //div'

// //div'
// //div'

// //div'
// //('p) [] operate it.
// document.querySelectorAll('p').forEach((p, index) => {
//   p.textContent = `${index}th p there!`;
// //div'