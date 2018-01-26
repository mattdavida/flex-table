const ADJUSTED_HEIGHT = document.body.clientHeight - 100;

let height = 500;
let content = document.getElementsByClassName('content');
let page = document.getElementsByClassName('page')[0];

let hasOverflowHide = (el) => {
    el.classList.contains('overflow-hide') ? el.classList.remove('overflow-hide') : el.classList.add('overflow-hide');
}

let onLoad = () => {
    document.body.clientHeight <= 500 ? page.style.height = ADJUSTED_HEIGHT : page.style.height = 500;
}

let resize = () => {
    document.body.clientHeight <= 575 ? page.style.height = (document.body.clientHeight - 100) : page.style.height = height;
}

window.onload = onLoad;
window.onresize = resize;

Array.prototype.forEach.call(content[0].children, el => {
    let children = el.children;
    Array.prototype.forEach.call(children, child => {

        child.addEventListener('mouseover', () => {
            hasOverflowHide(child);
            child.clientHeight > 18 ? child.style.cursor = 'pointer' : child.style.cursor = 'default';
        });

        child.addEventListener('mouseout', () => {
            hasOverflowHide(child);
        });

    });
});
