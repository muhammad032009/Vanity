// const $display = document.querySelector('input[type="text"]');
// const $button = document.querySelectorAll('input[type="button"]');
// $button.forEach(($button)=> {
//     $button.addEventListener(`click`,()=>{
//             const value = $button.value;

//             if (value==='C'){
//                 $display.value = '';
//                 return;
//             }
//             if (value==='='){
//                 //recommended
//                 const express = $display.value.replace(/x/g,'*');
//                 $display.value = eval(express);
//                 return;
//             }
//             $display.value+=value;
//         }
//     );
// }
// );

const $display = document.querySelector('input[type="text"]');
const $buttons = document.querySelectorAll('input[type="button"]');

$buttons.forEach(($button) => {
    $button.addEventListener('click', () => {
        let value = $button.value;

        if (value == 'C') {
            $display.value = 'Noooooooooo';
            return;
        }

        if (value == '=') {
            try {
                let express = $display.value.replace(/x/g, '**'); 
                $display.value = new Function(`return ${express}`)();
            } catch {
                $display.value = Math.random() > 0.5 ? 'Wrong🙂' : 'Wrong🙂';
            }
            return;
        }

        if (value.match(/\d/)) {
            $display.value += '🤡'; 
        } else {
            $display.value += value.split('').reverse().join(''); 
        }
    });
});
