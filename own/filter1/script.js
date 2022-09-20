const memArr = [
    "Kyaw Kyaw",
    "Zaw Zaw",
    "Aung Aung",
    "Tun Tun",
    "Myo Myo",
    "Kaung Kaung",
    "Htun Htun",
    "Thant Thant",
    "Aye Aye",
    "Hla Hla",
    "Mya Mya",
    "Bo Bo",
    "Kyal Kyal",
    "Hnin Hnin",
    "Phyu Phyu",
    "Htet Htet",
    "Thet Thet",
    "Win Win",
    "Zin Zin",
    "Myint Myint"
];

const searchInput = document.getElementById("search"),
    listGroup = document.getElementsByClassName("list-group"),
    sortBtns = [...document.querySelectorAll('.btn-sort')];

let filterMemArr, sortMemArr, sortSign;

/* Method 1 */
// function fsaMem(){
//     // console.log(sortSign);

//     // filter
//     filterMemArr = memArr.filter(value => {
//         return value.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase());
//     });

//     // sort
//     sortMemArr = filterMemArr;
//     if(sortSign === "az"){
//         sortMemArr.sort();
//     }else if(sortSign === "za"){
//         sortMemArr.sort().reverse();
//     }

//     // add
//     listGroup[0].innerHTML = "";
//     for(let value of sortMemArr){
//         listGroup[0].innerHTML += `
//             <li class="list-group-item">
//                 <a href="javascript:void(0)">${value}</a>
//             </li>`;
//     };
// };

/* Method 2 */
const fsaMem = () => {
    listGroup[0].innerHTML = "";

    // filter
    const searchInputValue = searchInput.value.toUpperCase();
    filterMemArr = memArr.filter(value => value.toUpperCase().indexOf(searchInputValue) > -1);
    
    // add
    for(value of filterMemArr){
        const newLi = document.createElement("li");
        newLi.className = "list-group-item";

        const newA = document.createElement("a");
        newA.setAttribute("href","javascript:void(0)");
        newA.innerText = value;

        newLi.appendChild(newA);
        listGroup[0].appendChild(newLi);
    }

    // sort
    if(sortSign !== 'nosort'){
        let looping = true, sorting = true;

        if(sortSign === 'az'){
            while(looping){
                const getLi = document.querySelectorAll('.list-group-item');
        
                looping = false;
        
                let x = 0;
                for(x; x < getLi.length-1; x++){
                    sorting = false;
                    if(getLi[x].innerText.toUpperCase() > getLi[x+1].innerText.toUpperCase()){
                        sorting = true;
                        break;
                    }
                }
        
                if(sorting){
                    getLi[x].parentNode.insertBefore(getLi[x+1], getLi[x]);
                    looping = true;
                }
            }
        }else if(sortSign === 'za'){
            while(looping){
                const getLi = document.querySelectorAll('.list-group-item');
        
                looping = false;
        
                let x = 0;
                for(x; x < getLi.length-1; x++){
                    sorting = false;
                    if(getLi[x].innerText.toUpperCase() < getLi[x+1].innerText.toUpperCase()){
                        sorting = true;
                        break;
                    }
                }
        
                if(sorting){
                    getLi[x].parentNode.insertBefore(getLi[x+1], getLi[x]);
                    looping = true;
                }
            }
        }
    }
}

// Start Main

searchInput.addEventListener('input',fsaMem);

function makeSortSign(event,sign){
    sortBtns.forEach(value => value.className = value.className.replace(" active",""));
    event.currentTarget.className += " active";

    sortSign = sign;
    fsaMem();
}

document.querySelector(".auto-active").click();

// End Main