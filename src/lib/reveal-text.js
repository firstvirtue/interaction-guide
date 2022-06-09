import {gsap, Quint} from 'gsap/all';

export class RevealText {
  constructor(opt) {
    const el = opt.el;
    const text = el.innerHTML;
    let wrappedText = '';
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if(/\s/g.test(char)) char = '&nbsp';
      // console.log(char);
      wrappedText += `<span class="char-wrap"><span class="char">${char}</span></span>`;
    }
    el.innerHTML = wrappedText;

    const $divMask = document.createElement('div');
    $divMask.classList.add('mask');
    $divMask.style.position = 'absolute';
    $divMask.style.top = 0;
    $divMask.style.left = 0;
    $divMask.style.width = '100%';
    $divMask.style.height = '100%';
    $divMask.style.backgroundColor = '#fff';
    el.appendChild($divMask);
    el.style.position = 'relative';

    const mask = {
      x1: 0,
      x2: 0,
      y1: 0,
    }

    gsap.set('.char-wrap', {autoAlpha: 0});
    gsap.timeline({
      onUpdate:(st) => {
        const clipPath = `polygon(${mask.x2}% 0, ${mask.x1}% 0, ${mask.x1}% 100%, ${mask.x2}% 100%)`;
        gsap.set($divMask, {webkitClipPath: clipPath})
      }
    })
    .to(mask, {x1: 110, duration: 1, ease:Quint.easeInOut, onComplete: () => {
      gsap.set('.char-wrap', {autoAlpha: 1});
    }}, 0)
    .to(mask, {x2: 110, duration: 1, ease:Quint.easeInOut}, 0.6)
  }
}