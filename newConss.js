let clickNewConss = document.querySelector('.pos__clickNewConss');
let btnNewConss = document.querySelector('.btn__newConss');
let btnClicked =  false;

btnNewConss.addEventListener('click', (e) => {
    console.log('foi clicado');
    switch (btnClicked){
        case false:
            clickNewConss.style.display = 'block';
            btnClicked = true;
            break;
        case true:
            clickNewConss.style.display = 'none';
            btnClicked = false;
            break;
    }
});