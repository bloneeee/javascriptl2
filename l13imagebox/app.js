const getimgboxes = document.querySelectorAll('.imgbox');
// console.log(getimgboxes); // NodeList

getimgboxes.forEach(function(getimgbox,idx){
    // console.log(getimgbox);
    // console.log(idx);

    getimgbox.addEventListener('click',function(){
        // console.log(idx);
        showbox(idx);
    });
});

function showbox(idx){
    // console.log(idx);

    getimgboxes.forEach(function(imagebox,curidx){
        // console.log('from parameter = ', idx);
        // console.log('from current = ', curidx);

        if(idx === curidx){
            imagebox.classList.add('show');

            imagebox.addEventListener("click",function(e){
                // console.log(e.target);
                // console.log(e.target.className)

                if(e.target.className === 'btn-close'){
                    imagebox.classList.remove('show')
                }

                if(e.target.className === 'btn'){
                    // const subbtn = imagebox.querySelector('.btn');
                    const subbtn = getimgboxes[idx].querySelector('.btn');
                    subbtn.textContent = 'Subscribed';
                }
            });
        }else{
            imagebox.classList.remove('show');
        }
    });
}