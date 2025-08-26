let currentColor = 'black';
let desenhar = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
    
let contexto = screen.getContext('2d');    
    

document.querySelectorAll('.colorArea .color').forEach(cor => {

    cor.addEventListener('click', corEscolhida);

});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', limparTela);

function corEscolhida(e){

    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.active').classList.remove('active');

    e.target.classList.add('active');

}

function mouseDownEvent(e){

    desenhar = true;

    mouseX = e.pageX - screen.offsetLeft;     
    mouseY = e.pageY - screen.offsetTop;

}

function mouseMoveEvent(e){

    if(desenhar){

        acao(e.pageX, e.pageY)

    }

}

function mouseUpEvent(){

    desenhar = false;

}

function acao(x, y){

    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    contexto.beginPath();
    contexto.lineWidth = 5;
    contexto.lineJoin = 'round';
    contexto.moveTo(mouseX, mouseY);
    contexto.lineTo(pointX, pointY);
    contexto.closePath();
    contexto.strokeStyle = currentColor;
    contexto.stroke();

    mouseX = pointX;
    mouseY = pointY;

}

function limparTela(){

    contexto.setTransform(1, 0, 0, 1, 0, 0);
    contexto.clearRect(0, 0, contexto.canvas.width, contexto.canvas.height);

}