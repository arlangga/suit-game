let btnBatu = document.getElementById('batu')
let btnKertas = document.getElementById('kertas')
let btnGunting = document.getElementById('gunting')

let imgP1 = document.getElementById('player1');
let imgP2 = document.getElementById('player2')

let hasil = document.getElementById('hasil')

btnBatu.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()*9) + 1;
    imgP1.src = 'fotoAset/stone.jpg'
    
    let manusia = 'batu';
    let comp = '';

    if(randomNumber < 4){
        comp = 'batu'
        imgP2.src = 'fotoAset/stone.jpg'
    }else if(randomNumber >= 4 && randomNumber < 7){
        comp = 'kertas'
        imgP2.src = 'fotoAset/papper-pngtree.png'
    }else{
        comp = 'gunting'
        imgP2.src = 'fotoAset/Scissor.jpg'
    }

    return eksekusi()
    
    function eksekusi(){
        if(manusia == comp){
            hasil.innerHTML = 'seri'
        }else if(comp == 'kertas'){
            hasil.innerHTML = 'kalah'
        }else {
            hasil.innerHTML = 'menang'
        }

        return;
    }
    
});

btnKertas.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()*9) + 1;
    imgP1.src = 'fotoAset/papper-pngtree.png'
    
    let manusia = 'kertas';
    let comp = '';

    if(randomNumber < 4){
        comp = 'batu'
        imgP2.src = 'fotoAset/stone.jpg'
    }else if(randomNumber >= 4 && randomNumber < 7){
        comp = 'kertas'
        imgP2.src = 'fotoAset/papper-pngtree.png'
    }else{
        comp = 'gunting'
        imgP2.src = 'fotoAset/Scissor.jpg'
    }

    return eksekusi()
    
    function eksekusi(){
        if(manusia == comp){
            hasil.innerHTML = 'seri'
        }else if(comp == 'gunting'){
            hasil.innerHTML = 'kalah'
        }else {
            hasil.innerHTML = 'menang'
        }

        return;
    }
    
});

btnGunting.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()*9) + 1;
    imgP1.src = 'fotoAset/Scissor.jpg'
    
    let manusia = 'gunting';
    let comp = '';

    if(randomNumber < 4){
        comp = 'batu'
        imgP2.src = 'fotoAset/stone.jpg'
    }else if(randomNumber >= 4 && randomNumber < 7){
        comp = 'kertas'
        imgP2.src = 'fotoAset/papper-pngtree.png'
    }else{
        comp = 'gunting'
        imgP2.src = 'fotoAset/Scissor.jpg'
    }

    return eksekusi()
    
    function eksekusi(){
        if(manusia == comp){
            hasil.innerHTML = 'seri'
        }else if(comp == 'batu'){
            hasil.innerHTML = 'kalah'
        }else {
            hasil.innerHTML = 'menang'
        }

        return;
    }
    
});