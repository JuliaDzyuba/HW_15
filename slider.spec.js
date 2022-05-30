describe('slider.js', () => {
  let slider;
  const mockedSlides = [
    {
      id: 1,
      title: 'Slide 1!',
      imgUrl: 'https://dummyimage.com/400x400/d65ad6/000000.jpg'
    },
    {
      id: 2,
      title: 'Slide 2!',
      imgUrl: 'https://dummyimage.com/400x400/faf73a/000000.jpg'
    },
    {
      id: 3,
      title: 'Slide 3!',
      imgUrl: 'https://dummyimage.com/400x400/5aeffa/000000.jpg'
    },
  ];

  beforeEach(() => {
    slider = new Slider({
      width: 400,
      arrow: true,
      slidesInView: 1,
      data: mockedSlides
    });

  });

  it('should have common methods', () => {
    expect(slider.init).toBeDefined();
    expect(slider.renderSlider).toBeDefined();
    expect(slider.createSlides).toBeDefined();
    expect(slider.nextSlide).toBeDefined();
    expect(slider.prevSlide).toBeDefined();
    expect(slider.moveSlide).toBeDefined();
  });

  it('should call init methods', () => {
    const initSpy = spyOn(slider, 'init');
    slider.init();
    expect(initSpy).toHaveBeenCalled();
  });  

  describe('createSlides()', () => {
    it('should be called', () => {
      const mockedSlideData = {
        id: 1,
        title: 'Slide 1!',
        imgUrl: 'https://images.unsplash.com/photo-1635352721344-ee65dbac28f0'
      };

      const createSlidesSpy = spyOn(slider, 'createSlides').and.returnValue(mockedSlideData);
      slider.createSlides(mockedSlideData);

      expect(createSlidesSpy).toHaveBeenCalled();
      expect(createSlidesSpy).toHaveBeenCalledTimes(1);
      expect(createSlidesSpy).toHaveBeenCalledWith(mockedSlideData);
      
    });
  });

  describe('nextSlide()', () => {
    it('should be called after next button click', () => {
      const nextSlideSpy = spyOn(slider, 'nextSlide');
      slider.nextSlide();

      const nextBtn = document.querySelector('.btn-right');
      nextBtn.click();

      expect(nextSlideSpy).toBeDefined();
      expect(nextSlideSpy).toHaveBeenCalled();
    });
  });

  describe('prevSlide()', () => {
    it('should be called after prev button click', () => {
      const prevSlideSpy = spyOn(slider, 'prevSlide');
      slider.prevSlide();

      const prevBtn = document.querySelector('.btn-left');
      prevBtn.click();

      expect(prevSlideSpy).toBeDefined();
      expect(prevSlideSpy).toHaveBeenCalled();
    });
  });

})