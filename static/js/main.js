
let element = document.getElementsByClassName('item');

for (let i = 0; i < element.length ; i++) {
    element[i].addEventListener('click',function () {
        for (let j = 0; j < element.length; j++) {
            element[j].className = "item";
        }
        element[i].className += " active";
    })
}
