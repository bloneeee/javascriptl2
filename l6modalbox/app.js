var getbtnmodal = document.getElementById("btn-modal");
var getmodalbox = document.getElementById("loginmodal");
var getbtnclose = document.querySelector(".btn-close");

getbtnmodal.addEventListener('click',openmodal);

getbtnclose.addEventListener('click',closemodal);

window.onclick = function(e){
    // console.log(e.target);
    if(e.target === getmodalbox){
        closemodal();
    }
}

function openmodal(){
    // console.log('hi');
    getmodalbox.style.display = "block";
}

function closemodal(){
    getmodalbox.style.display = "none";
}