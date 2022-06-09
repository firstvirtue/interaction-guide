import gsap from 'gsap';

export class SplitText {
  constructor(el) {
    const text = el.innerHTML;
    let wrappedText = '';
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if(/\s/g.test(char)) char = '&nbsp';
      // console.log(char);
      wrappedText += `<span class="mask"><span class="splitted-text">${char}</span></span>`;
    }
    el.innerHTML = wrappedText;
    this.hideSplitText();
    window.showSplitText = this.showSplitText;
    window.hideSplitText = this.hideSplitText;
  }

  showSplitText() {
    gsap.to('.splitted-text', { x: 0, stagger: { amount: 0.5 } })
  }

  hideSplitText() {
    gsap.to('.splitted-text', { transform: 'translateX(-100%)' })
  }
}