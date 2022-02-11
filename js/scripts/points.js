window.addEventListener('load', () => {
  // TODO: refactor duplicate code to generating gallery function: f(texts, block) => gallery[texts, controls, block]

  let firstBlock = document.getElementsByClassName('points__block_first')[0];
  let secondBlock = document.getElementsByClassName('points__block_second')[0];

  let activeFirst = 0;
  let activeSecond = 0;

  const firstTexts = [
    `
      Просвещение, образование, наука - двигатели прогресса, и человек будущего - это человек, чрезвычайно развитый интеллектуально, ведь в мире будущего сила и агрессия уже не являются аргументом для достижения целей, главное оружие - это Знание. Мы убеждены, что одним из главных приоритетов и инструментов развития общества является поддержка и развитие науки.
      <br/><br/>
      Именно поэтому важной частью нашей экосистемы являются просветительские и образовательные проекты.
    `,
    `
      Тело - функциональная оболочка, единственный известный нам инструмент, пригодный для жизни и активной деятельности в этой реальности. А инструмент должен быть эффективным и комфортным. Сложно следовать по пути развития духовного и интеллектуального, если физическое тело подводит, это удается немногим. Поэтому мы за умеренную физическую нагрузку, заботу о себе, здоровый образ жизни, комфортный лично для каждого. 
      <br/><br/>
      Неважно, чем вы занимаетесь: йогой, бегом, силовыми тренировками или танцами, неважно, веган вы или не представляете свою жизнь без стейка (правда, надеемся, скоро стейки уже будут выращиваться в пробирке)) - главное, чтобы вашему телу было комфортно ровно настолько, чтобы обеспечивать бесперебойное развитие Разума и Души.
    `,
    `
      Загадочная невидимая сущность, скрывающаяся в глубине каждого из нас многогранна и подходов к ее восприятию множество: одни считают ее частью вселенского непостижимого Разума, другие приравнивают к сознанию и изучают ее с помощью нейронауки или физики. Каким бы ни был подход, именно о душе мы думаем, говоря о своей личности и ее высоких стремлениях. Развитию души способствует культурное просвещение, познание тонких чувств, духовные практики. 
      <br/><br/>
      Одна из главных характеристик человека будущего и, кстати, современной молодежи - “духовный, но не религиозный”, и для нас это более чем приемлемо: мы не считаем обязательной принадлежность к какой-либо религиозной системе, но и не против них. Главное - это стремление к миру, гармонии с собой и окружающими, милосердие и посильная помощь там, где это необходимо.
    `,
    `
      Мы принимаем принципы кармы как мерило смысла и “веса” человеческого существования в системе вселенского баланса. Карма - это наша совесть и голос справедливости. Заработать очки в карму несложно, главное знать, что любое наше действие бумерангом отражается на нас самих.
      <br/><br/>
      Поэтому мы считаем важной добровольческую деятельность как на благо людей, нуждающихся в помощи, так и на благо природы и животных.
    `,
  ];

  const secondTexts = [
    ` 
      Защита окружающей среды и поддержание природной экосистемы является одним из важнейших приоритетов нашего поколения и нашего движения. 
      <br/><br/>
      Мы уверены, что технологический прогресс и все передовые достижения человечества приобретают наиболее высокую ценность только на фоне гармонично развивающейся экосистемы. Именно поэтому экологическая повестка занимает один из ведущих пунктов в нашей системе ценностей.
    `,
    `
      Развитие общества через развитие каждого отдельно взятого индивида - один из главных принципов “Поколения Z”. Совершенствование сферы образования и просвещения, обеспечение гендерного равенства и безграничных возможностей для каждого, движение в сторону ноократичного устройства общественных отношений - эти и многие другие факторы являются ключевыми для поступательного развития общества, прогресса и мира. 
      <br/><br/>
      Мы поддерживаем значимые инициативы молодежи на благо развития социальной среды.
    `,
    `
      Развитие новейших технологий, тотальное перестроение рынка труда - серьезные вызовы, с которыми экономика столкнется в ближайшее время. Мы уверены, что современное молодое поколение способно внести свой вклад в экономику будущего, создавая передовые технологические (и не только) стартапы, продвигая науку, способствуя развитию экономики знаний. 
      <br/><br/>
      Мы поддерживаем подобные инициативы, потому что искренне считаем, что интеллектуальный труд и бизнес, направленный на пользу обществу и окружающей среде, заслуживает наиболее высокого вознаграждения и признания.
    `,
  ];

  let firstControls = firstBlock.getElementsByClassName('gallery__controlCell');

  let firstBlockLessButton = firstBlock.getElementsByClassName('gallery__controlButton_left')[0];
  let firstBlockMoreButton = firstBlock.getElementsByClassName('gallery__controlButton_right')[0];

  firstBlockLessButton.addEventListener('click', function () {
    if (this.classList.contains('gallery__controlButton_disabled')) return;

    switchFirstGalleryScreen(+activeFirst - 1);
  });

  firstBlockMoreButton.addEventListener('click', function () {
    if (this.classList.contains('gallery__controlButton_disabled')) return;

    switchFirstGalleryScreen(+activeFirst + 1);
  });

  function switchFirstGalleryScreen(newScreen) {
    firstControls[activeFirst].classList.remove('gallery__controlCell_active');
    activeFirst = newScreen;
    firstControls[activeFirst].classList.add('gallery__controlCell_active');
    firstTextArea.classList.add('gallery__contentBlock_hidden');
    setTimeout(() => {
      firstTextArea.innerHTML = firstTexts[activeFirst];
      firstTextArea.classList.remove('gallery__contentBlock_hidden');
    }, 200);
    firstCurrentBlock.innerHTML = `0${+activeFirst + 1}`.slice(-2);
    firstBlockLessButton.classList.remove('gallery__controlButton_disabled');
    firstBlockMoreButton.classList.remove('gallery__controlButton_disabled');
    if (!+activeFirst) {
      firstBlockLessButton.classList.add('gallery__controlButton_disabled');
    }
    if (+activeFirst === firstControls.length - 1) {
      firstBlockMoreButton.classList.add('gallery__controlButton_disabled');
    }
  }

  let firstTextArea = firstBlock.getElementsByClassName('gallery__contentBlock')[0];

  let firstCurrentBlock = firstBlock.getElementsByClassName('pagination__current')[0];

  firstBlock.getElementsByClassName('pagination__all')[0].innerHTML =
    `0${firstControls.length}`.slice(-2);

  for (let elem in firstControls) {
    try {
      firstControls[elem].addEventListener('click', () => {
        switchFirstGalleryScreen(elem);
      });
    } catch {}
  }

  let secondControls = secondBlock.getElementsByClassName('gallery__controlCell');

  let secondBlockLessButton = secondBlock.getElementsByClassName('gallery__controlButton_left')[0];
  let secondBlockMoreButton = secondBlock.getElementsByClassName('gallery__controlButton_right')[0];

  secondBlockLessButton.addEventListener('click', function () {
    if (this.classList.contains('gallery__controlButton_disabled')) return;

    switchSecondGalleryScreen(+activeSecond - 1);
  });

  secondBlockMoreButton.addEventListener('click', function () {
    if (this.classList.contains('gallery__controlButton_disabled')) return;

    switchSecondGalleryScreen(+activeSecond + 1);
  });

  function switchSecondGalleryScreen(newScreen) {
    secondControls[activeSecond].classList.remove('gallery__controlCell_active');
    activeSecond = newScreen;
    secondControls[activeSecond].classList.add('gallery__controlCell_active');
    secondTextArea.classList.add('gallery__contentBlock_hidden');
    setTimeout(() => {
      secondTextArea.innerHTML = secondTexts[activeSecond];
      secondTextArea.classList.remove('gallery__contentBlock_hidden');
    }, 200);
    secondCurrentBlock.innerHTML = `0${+activeSecond + 1}`.slice(-2);
    secondBlockLessButton.classList.remove('gallery__controlButton_disabled');
    secondBlockMoreButton.classList.remove('gallery__controlButton_disabled');
    if (!+activeSecond) {
      secondBlockLessButton.classList.add('gallery__controlButton_disabled');
    }
    if (+activeSecond === secondControls.length - 1) {
      secondBlockMoreButton.classList.add('gallery__controlButton_disabled');
    }
  }

  let secondTextArea = secondBlock.getElementsByClassName('gallery__contentBlock')[0];

  let secondCurrentBlock = secondBlock.getElementsByClassName('pagination__current')[0];

  secondBlock.getElementsByClassName('pagination__all')[0].innerHTML =
    `0${secondControls.length}`.slice(-2);

  for (let elem in secondControls) {
    try {
      secondControls[elem].addEventListener('click', () => {
        switchSecondGalleryScreen(elem);
      });
    } catch {}
  }
});
