const imgArr = [
    {src: "./img/airport.jpg", alt: "airport"},
    {src: "./img/ambulance.jpg", alt: "ambulance"},
    {src: "./img/mountain.jpg", alt: "mountain"},
    {src: "./img/traffic.jpg", alt: "traffic"}
];

// to add tags

const imgContainer = document.querySelector("#img-container");
function toAddImg(mainArr,randomNumArr){
    imgContainer.innerHTML = "";

    randomNumArr.forEach(value => {
        imgContainer.innerHTML += `
            <div class="form-group">
                <input type="radio" name="answer" id="${mainArr[value].alt}" class="form-control"/>
                <label for="${mainArr[value].alt}" class="form-label">
                    <img src="${mainArr[value].src}" class="form-img" alt="${mainArr[value].alt}"/>
                </label>
            </div>`;
    });
};

function toMakeRandomNumArr(mainArr,randomNumArr){
    const randomNum = Math.floor(Math.random() * mainArr.length);
    
    if(randomNumArr.indexOf(randomNum) > -1){
        toMakeRandomNumArr(mainArr,randomNumArr);
        return
    }

    randomNumArr.push(randomNum);

    if(randomNumArr.length < mainArr.length) toMakeRandomNumArr(mainArr,randomNumArr);
}

// for to make question and answer

const questionTag = document.querySelector("#question");

let  questionRandomNumArr = answerRandomNumArr = [],
    answerRandomNumArrIdx = 0,
    question;

const toMakeQuesAndAns = async (mainArr) => {
    await toMakeRandomNumArr(mainArr,questionRandomNumArr);
    // console.log(questionRandomNumArr);
    await toAddImg(mainArr,questionRandomNumArr);

    if(answerRandomNumArr.length === 0) toMakeRandomNumArr(mainArr,answerRandomNumArr);
    
    question = imgArr[answerRandomNumArr[answerRandomNumArrIdx]].alt;
    questionTag.innerText = `Choose ${question} ?`;
};

toMakeQuesAndAns(imgArr);

// for next btn

const btnNext = document.querySelector(".btn-next"),
    showResult = document.querySelector("#show-result");

let  correct = wrong = 0, questionNum = 4;

btnNext.onclick = function(){
    // to check correct or wrong

    const checkedTags = [...document.querySelectorAll("input[name='answer']:checked")];
    if(checkedTags.length === 0 && btnNext.innerText.toLowerCase() === "next"){
        window.alert("Choose anything...");
        return;
    }
    checkedTags.forEach(value => value.id === question ? correct++ : wrong++);

    // to add answerRandomNumArrIdx++

    // console.log(questionRandomNumArr,answerRandomNumArr);

    questionRandomNumArr = []; // restart for again > toMakeQuesAndAns(imgArr)
    answerRandomNumArrIdx++;
    // console.log("answerRandomNumArrIdx",answerRandomNumArrIdx);

    if(answerRandomNumArrIdx >= questionNum){
        questionTag.innerHTML = imgContainer.innerHTML = "";

        showResult.innerHTML = `
            <span class="correct">Correct: ${correct}</span> 
            &
            <span class="wrong">Wrong: ${wrong}</span>`;

        btnNext.innerText = "again";

        answerRandomNumArr = [];
        correct = wrong  = 0;
        answerRandomNumArrIdx = -1;

        return;
    }

    // to make again
    toMakeQuesAndAns(imgArr);

    // console.log(questionRandomNumArr,answerRandomNumArr);
    // console.log(correct,wrong);

    // to resert btn next
    if(btnNext.innerText.toLowerCase() === "again") resertNextBtn();
};


function resertNextBtn(){
    showResult.innerHTML = ``;
    btnNext.innerText = "Next";
}