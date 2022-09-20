const database = [
    {
        question: "Choose Traffic Light ?", 
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctanswer: "a"
    },

    {
        question: "Choose Mountain ?", 
        a: "./img/ambulance.jpg",
        b: "./img/mountain.jpg",
        c: "./img/traffic.jpg",
        d: "./img/airport.jpg",
        correctanswer: "b"
    },

    {
        question: "Choose Ambulance Truck ?", 
        a: "./img/ambulance.jpg",
        b: "./img/airport.jpg",
        c: "./img/traffic.jpg",
        d: "./img/mountain.jpg",
        correctanswer: "a"
    },

    {
        question: "Choose Airport ?", 
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctanswer: "d"
    }
];

// console.log(database[0].b);

const getcontainer = document.querySelector(".container");
const getquestion = document.querySelector(".question");
const getanswers = document.querySelectorAll(".answer");
const geta_img = document.getElementById("a_img");
const getb_img = document.getElementById("b_img");
const getc_img = document.getElementById("c_img");
const getd_img = document.getElementById("d_img");
const getbtn = document.querySelector(".btn");

// console.log(getcontainer,getquestion,getansers);
// console.log(geta_img,getb_img,getc_img,getd_img);

let currentidx = 0;
let score = 0;

startquestion();

function startquestion(){
    removeselectors();

    const currentqes = database[currentidx];

    // console.log(currentqes)

    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;
}

function getsingleanswer(){
    let answer;
    // console.log(answer);

    // console.log(getanswers);
    getanswers.forEach(function(getanser){
        // console.log(getanser);
        // console.log(getanser.id);

        if(getanser.checked){
            // console.log(getanser.id);
            answer = getanser.id;
        }
    });

    // console.log(answer);

    return answer;
}

// getsingleanswer();

getbtn.addEventListener('click',function(){
    // console.log('i am working');

    const answer = getsingleanswer();

    // console.log(answer);

    if(answer){
        // console.log(answer);

        if(answer === database[currentidx].correctanswer){
            score++;
        }

        currentidx++;

        // console.log(currentidx);

        if(currentidx < database.length){
            startquestion();
        }else{
            // console.log(score);

            getcontainer.innerHTML = `
                <h3>Total Score: ${score * 25}</h3>
                <h4>You answered correctly at ${score} / ${database.length} questions.</h4>
                <!-- <button type="button" class="btn" ondblclick="location.reload()">Double Click To Reload</button> -->
                <button type="button" class="btn" onclick="doubleclick()">Double Click To Reload</button>
            `;
        }
    }else{
        window.alert('Choose One Answer');
    }
});

function removeselectors(){
    getanswers.forEach(function(getanswer){
        return getanswer.checked = false;
    });
};

let clicktimes = 0;

function doubleclick(){
    // console.log('hay i am working');

    // console.log(clicktimes);

    if(clicktimes === 0){
        // clicktimes = new Date().getTime();
        clicktimes = Date.now();
        console.log(clicktimes);
    }else{
        // if((new Date().getTime() - clicktimes) < 800){
        if((Date.now() - clicktimes) < 800){
            // console.log('hello');

            location.reload();

            clicktimes = 0;
        }else{
            clicktimes = new Date().getTime();
        }
    }
}