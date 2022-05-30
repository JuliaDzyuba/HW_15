class Slider {
  constructor(options) {
    this.root = document.createElement('div');
    this.rootWidth = options.width || 400;
    this.container = document.createElement('div');
    this.data = options.data;
    this.slidesInView = options.slidesInView || 1;
    this.currentSlide = 0;
    if(options.arrow) {
      this.arrowRight = document.createElement('button');
      this.arrowLeft = document.createElement('button');
    }
    this.setEventListeners();    
  }

  init() {
    this.renderSlider();
  }

  renderSlider() {
    this.root.classList.add('slider');
    this.root.style.display = 'block'; //
    this.root.style.width = this.rootWidth + 'px'; //
    document.body.appendChild(this.root);
    this.container.classList.add('slides-container');
    
    this.data.map(item => {
      this.container.insertAdjacentHTML('beforeend', this.createSlides(item));      
    });    
    
    this.root.insertAdjacentElement('beforeend', this.container);

    let slides = document.querySelectorAll('.slide');
    slides.forEach(s => s.style.minWidth = `${this.rootWidth / this.slidesInView }px`);

    if (this.arrowRight && this.arrowLeft) {
      this.arrowRight.classList.add('btn', 'btn-right');
      this.arrowLeft.classList.add('btn', 'btn-left');
      this.arrowRight.textContent = '>';
      this.arrowLeft.textContent = '<';
      this.root.insertAdjacentElement('beforeend', this.arrowRight);
      this.root.insertAdjacentElement('beforeend', this.arrowLeft);
    }
    
  }

  createSlides(slideData) {    
    return `
      <div class="slide">
        <h3>${slideData.title}</h3>
        <img src=${slideData.imgUrl} alt=${slideData.title}/>
      </div>
    `;
  }

  nextSlide() {
    if( this.slidesInView < this.data.length && this.currentSlide < this.data.length) {
      this.currentSlide = this.currentSlide < this.data.length - 1 ? this.currentSlide + 1 : 0;
      this.moveSlide();
    }    
  }

  prevSlide() {
    if( this.slidesInView < this.data.length && this.slidesInView - this.currentSlide < this.data.length ) {
      this.currentSlide = this.currentSlide <= 0 ? this.data.length - 1 : this.currentSlide - 1;
      this.moveSlide();
    }    
  }

  moveSlide() {
    this.container.style.transform = `translateX(-${this.currentSlide * this.root.offsetWidth}px)`;
  }

  setEventListeners() {
    this.arrowRight?.addEventListener('click', this.nextSlide.bind(this));
    this.arrowLeft?.addEventListener('click', this.prevSlide.bind(this));
  }

}