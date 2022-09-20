const getemail = document.getElementById("emails");
const gettextarea = document.querySelector("textarea");
const getbtn = document.querySelector(".btn");
const getemcontainer = document.querySelector(".email-container");

// console.log(getemail,gettextarea,getbtn,getemcontainer);

getemail.focus();

getemail.addEventListener("keyup",function(e){
    // createemaillist(e.target);
    // createemaillist(e.target.value);

    // createemaillist(this);
    createemaillist(this.value);
});

function createemaillist(inputtext){
    // console.log(inputtext);

    // split by comma(,)
    // const eitems = inputtext.split(',');
    // console.log(eitems);

    // remove empty, empty(space)
    // const eitems = inputtext.split(',').filter(rmempty => {
    //     // console.log(rmempty.trim())
    //     return rmempty.trim() !== ''
    // });
    // console.log(eitems);

    // remove space/empty
    const eitems = inputtext.split(',').filter(rmempty => rmempty.trim() !== '').map(rmempty => rmempty.trim());
    // console.log(eitems);

    getemcontainer.innerHTML = '';

    eitems.forEach(function(eitem){
        // console.log(eitem);

        const setnewspan = document.createElement('span');
        setnewspan.textContent = eitem;
        setnewspan.classList.add('email-item');
        // console.log(setnewspan);

        getemcontainer.appendChild(setnewspan);
    });
}

getbtn.addEventListener('click',function(e){
    sendemail();
    e.preventDefault();
})

function sendemail(){
    // console.log('i am working');

    const gettxtvalue = gettextarea.value;
    const getaddresses = document.querySelectorAll('.email-item');

    var persons = [];
    if(getaddresses.length > 0 && gettxtvalue){
        getaddresses.forEach(function(getaddress){
            persons.push({
                email: getaddress.textContent,
                message: gettxtvalue
            });
        });

        console.log(persons);
    }else{
        window.alert('Enter Message');
        gettextarea.focus();
    }
}