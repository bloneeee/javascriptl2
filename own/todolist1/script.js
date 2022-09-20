/* Start Today */

const getDMY = document.getElementById('dmy'),
    getDay = document.getElementById('day');

const dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    monthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const updateToday = () => {
    const nd = new Date();
    const fixDate = nd.getDate() < 10 ? "0" + nd.getDate() : nd.getDate();

    getDMY.innerText = fixDate + " " + monthArr[nd.getMonth()] + " " + nd.getUTCFullYear();
    getDay.innerText = dayArr[nd.getDay()];
}

setInterval(updateToday,100);

/* End Today */

/* Start Modal */

const todoAddBtn = document.querySelector(".todo-add-btn");
let getModal;

todoAddBtn.addEventListener('click', function(){
    getModal = document.querySelector(this.getAttribute('data-bs-target'));
    getModal.style.display = "block";
});

window.onclick = function(e){
    if(e.target === getModal) getModal.style.display = "none";
}

/* End Modal */

/* Start List */

// to active btnSave
const listInput = document.getElementById("list-input"),
    btnSave = document.querySelector('.btn-save');

listInput.addEventListener('keyup',function(e){
    const inputValue = this.value;

    if(inputValue.length === 0){
        btnSave.classList.add("disabled");
    }else{
        btnSave.classList.remove("disabled");
    }

    if(e.key === 'Enter') addList(inputValue);
});

btnSave.addEventListener('click',function(){
    if(this.classList.contains('disabled')) return;
    addList(listInput.value);
});

// to add listGroup
const listGroup = document.querySelector(".list-group");
const addList = (text,done) => {
    const listGroupItem = document.createElement('div');
    listGroupItem.className = "list-group-item";
    listGroupItem.innerHTML = `
        <div class="move-con">
            <span class="checkbox">
                <span class="border"></span>
                <span class="border"></span>
                <span class="border"></span>
                <span class="border"></span>
                <span class="border"></span>
            </span>

            <span class="text">${text}</span>
        </div>`;

    if(done) listGroupItem.classList.add("done");

    listGroup.appendChild(listGroupItem);
    
    listInput.value = "";
    btnSave.classList.add("disabled");

    // for checkbox
    [...document.querySelectorAll('.checkbox')].forEach(value => value.onclick = function(){
        this.parentElement.parentElement.classList.toggle("done");
        addLocal();
    });

    // for delete
    makeDelete(listGroupItem);

    // to add localSotrage
    addLocal();
}

// to make delete 
let startX, moveX, finalX, 
    isDragging, result1, currentItem;

const makeDelete = (item) => {
    item.addEventListener('touchstart',touchStart)
    item.addEventListener('touchend',touchEnd)
    item.addEventListener('touchmove',touchMove)

    item.addEventListener('mousedown',touchStart)
    item.addEventListener('mouseup',touchEnd)
    item.addEventListener('mouseleave',touchEnd)
    item.addEventListener('mousemove',touchMove)
}

const touchStart = (e) => {
    e.currentTarget.classList.add("grabbing");
    isDragging = true;

    currentItem = e.currentTarget;

    startX = getX(e);
    result1 = setInterval(setX,100);
}

const touchEnd = (e) => {
    e.currentTarget.classList.remove("grabbing");
    isDragging = false;
    clearInterval(result1);

    const totalWidth = -e.currentTarget.getBoundingClientRect().width;

    finalX = finalX < totalWidth / 2 ? totalWidth : 0;
    setX();

    if(finalX === totalWidth){
        setTimeout(()=>{
            finalX = 0;
            currentItem.remove();
            addLocal();
        },300);
    }
}

const touchMove = (e) => {
    if(isDragging){ // condition for mousemove
        moveX = getX(e);
        finalX = moveX - startX;
    }
}

const getX = (e) => {
    return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
}

const setX = () => {
    if(currentItem && finalX <= 0){
        currentItem.children[0].style.transform = `translateX(${finalX}px)`;
    }
}

// to add localStorage
const addLocal = () => {
    const listGroupItems = [...document.querySelectorAll(".list-group-item")];
    const listArr = [];
    
    listGroupItems.forEach(value => {
        listArr.push({
            text: value.querySelector(".text").innerText,
            done: value.classList.contains("done")
        });
    });

    const listJsonArr = JSON.stringify(listArr);
    localStorage.setItem('listJsonArr',listJsonArr);
}

// get from localStorage
const getListJsonArr = localStorage.getItem("listJsonArr");
if(getListJsonArr){
    const getListArr = JSON.parse(getListJsonArr);
    getListArr.forEach(value => addList(value.text,value.done));
}

/* End List */