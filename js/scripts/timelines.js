window.addEventListener('load', () => {
  constructTimeline(
    document.getElementsByClassName('timeline_education')[0],
    document.getElementsByClassName('controls_education')[0]
  );

  constructTimeline(
    document.getElementsByClassName('timeline_development')[0],
    document.getElementsByClassName('controls_development')[0]
  );

  function constructTimeline(wrapper, controlsWrapper) {
    let active = 0;
    let elems = wrapper.getElementsByClassName('container__block');
    console.log(elems);
    let less = controlsWrapper.getElementsByClassName('timeline__button_less')[0];
    let more = controlsWrapper.getElementsByClassName('timeline__button_more')[0];
    let timeline = wrapper.getElementsByClassName('timeline__container')[0];

    function switchPeriod(period) {
      elems[active].classList.remove('container__block_active');
      active = period;
      elems[active].classList.add('container__block_active');
      translateTimeline(active);
      less.classList.remove('timeline__button_disabled');
      more.classList.remove('timeline__button_disabled');
      if (!+active) {
        less.classList.add('timeline__button_disabled');
      }
      if (+active === elems.length - 1) {
        more.classList.add('timeline__button_disabled');
      }
    }

    function translateTimeline(period) {
      timeline.style.transform = `translateX(-${period * (300 + 80)}px)`;
    }

    less.addEventListener('click', function () {
      if (this.classList.contains('timeline__button_disabled')) return;

      switchPeriod(active - 1);
    });

    more.addEventListener('click', function () {
      if (this.classList.contains('timeline__button_disabled')) return;

      switchPeriod(active + 1);
    });
  }
});
