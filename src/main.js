import anime from "animejs";
import { text } from "./modules/module";

console.log(text);

anime({
    targets: 'h1',
    rotate: 360,
    duration: 3000
})

//images

const img = document.createElement('img');
document.body.append(img);

console.log(import.meta.url)

const imgUrl = new URL('./images/sully.webp', import.meta.url)
img.src = imgUrl;
