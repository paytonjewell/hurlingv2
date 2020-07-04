const selector = (elem) => document.querySelector(elem);

selector('.open').addEventListener('click', () => {
    selector('.nav-list').classList.add('active');
})

selector('.close').addEventListener('click', () => {
    selector('.nav-list').classList.remove('active');
})