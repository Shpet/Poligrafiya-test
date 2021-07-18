let open_lang_mob = document.querySelector('div.top-info__burger-wrapper > div.menu__item.lang');
let hidden_lang_block = document.querySelector('body > div > header > div > div.top-info__burger-wrapper > div.menu__item.lang > div');


open_lang_mob.addEventListener('touchstart', (ev) => {
    hidden_lang_block.classList.toggle('menu__item-extended-active');
});