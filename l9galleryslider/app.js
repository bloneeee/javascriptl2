var getimgs = document.querySelectorAll(".img"); // NodeList
// console.log(getimgs);

var getmodal = document.querySelector(".modal");
var getmodalimg = document.querySelector(".modal-img");
var getcpation = document.querySelector(".caption");
var getbtnclose = document.querySelector(".btn-close");

for(var x = 0; x < getimgs.length; x++){
    getimgs[x].addEventListener('click',function(){
        shownow(this);
    });
}

function shownow(ele){
    // console.log(ele);
    // console.log(ele.src);
    // console.log(ele.alt);

    getmodal.style.display = "block";
    getmodalimg.src = ele.src;
    getcpation.textContent = ele.alt;
}

// getbtnclose.addEventListener("click",function(){
//     getmodal.style.display = "none";
// });

getbtnclose.onclick = function(){
    getmodal.style.display = "none";
}

document.addEventListener('click', function(e){
    // console.log(e.target);
    
    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
})