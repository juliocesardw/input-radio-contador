
const decrease = document.querySelectorAll('[data-decrease]');
const increase = document.querySelectorAll('[data-increase]');

decrease.forEach(btn => {

    btn.addEventListener('click',(e)=>{
        const elPadre=e.currentTarget.parentNode;
        var input=elPadre.querySelector('input');

        var value = parseInt(input.value, 10);

        if(isNaN(value)){
            value=0;
        }else{
            value=value;
        }

        if(value < 1){
            value=1;
        }

        value--;

        //mostranos el valor en neustro input
        input.value=value;
    })

});


increase.forEach(btn => {

    btn.addEventListener('click',(e)=>{
        const elPadre=e.currentTarget.parentNode;
        var input=elPadre.querySelector('input');

        var value = parseInt(input.value, 10);

        if(isNaN(value)){
            value=0;
        }else{
            value=value;
        }

        value++;

        //mostranos el valor en neustro input
        input.value=value;
    })

});