const canvas = document.querySelector("#circ");
const ctx = canvas.getContext("2d");

const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();

canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

ctx.scale(dpr, dpr);
const cx = rect.width / 2 - 30;
const cy = rect.height / 2 - 80;
const radius = 300;

ctx.beginPath();

// for (let i = 0; i < 360; i++) {
//     const angle = (i * 10) / 180;
//     console.log(`${angle}   ${Math.sin(angle)}   ${Math.cos(angle)}`);
//     // console.log(Math.sin(angle));
//     // console.log(Math.cos(angle));
//     const x = cx + radius * Math.sin(angle);
//     const y = cy + radius * Math.cos(angle);

//     ctx.moveTo(cx, cy);
//     ctx.lineTo(x, y);
// }

let arr = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
for (let i = 0; i < arr.length; i++) {
    const angle = (i * 10) / arr.length;
    const x = cx + radius * arr[angle];
    const y = cy + radius * arr[angle - (arr.length - 1)];

    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
}
ctx.strokeStyle = "#beff01";
ctx.stroke();
