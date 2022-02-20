const range = document.getElementById('jsRange');
const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

const stopPainting = () => {
    painting = false;
};

const startPainting = () => {
    painting = true;
};

const onMouseEnter = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};


const handleColorClick = (event) => {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
};

const handleRangeChange = (event) => {
    const size = event.target.value;
    ctx.lineWidth = size;
};


if(canvas) {
    canvas.addEventListener('mousemove', onMouseEnter);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
};

Array.from(colors).forEach(color => 
    color.addEventListener('click', handleColorClick)
);

if(range) {
    range.addEventListener('input', handleRangeChange);
};