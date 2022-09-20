const getEmail = document.getElementById("email");

// getEmail.addEventListener('keyup',function(e){
//     let finalTag = this.querySelector("div:last-of-type");

//     if(e.key === ','){
//         if(finalTag.textContent.length === 1){
//             finalTag.textContent = '';
//         }else{
//             finalTag.textContent.split(',').forEach(value => {
//                 if(value !== ''){
//                     finalTag.textContent = value;

//                     if(!value.includes(' ') && value.includes('@gmail.com')){
//                         finalTag.classList.remove("bg-danger");
//                         finalTag.classList.add("bg-success");
//                     }else if(value.includes){
//                         finalTag.classList.add("bg-danger");
//                         finalTag.classList.remove("bg-success");
//                     }

//                     const spanTag = document.createElement("span");
//                     spanTag.className = "delete-btn"
//                     finalTag.appendChild(spanTag);
//                 }
//             });

//             getEmail.innerHTML += "<div class='email-item'></div>";
//         };
//     }
// });

getEmail.addEventListener('click',function(e){
    console.log(e.target.closest(""))
});