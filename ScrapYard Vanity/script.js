// let buttonCount = 1; 
//         let maxButtons = 20; 

//         function duplicateButton(event) {
//             if (buttonCount >= maxButtons) {
//                 document.getElementById("explosionSound").play(); 
//                 alert("Max");
//                 return;
//             }

//             let newButton = document.createElement("button");
//             newButton.innerText = "Click Me!";
//             newButton.className = "btn";

//             let screenWidth = window.innerWidth;
//             let screenHeight = window.innerHeight;
//             let randomX = Math.random() * (screenWidth - 100);
//             let randomY = Math.random() * (screenHeight - 40);

//             newButton.style.left = `${randomX}px`;
//             newButton.style.top = `${randomY}px`;

//             newButton.addEventListener("click", duplicateButton);
//             document.body.appendChild(newButton);
            
//             buttonCount++;
//         }

//         document.getElementById("newButton").addEventListener("click", duplicateButton);
