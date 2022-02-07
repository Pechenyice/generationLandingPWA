window.addEventListener('load', () => {
  let projectsWrapper = document.getElementsByClassName('main__projects')[0];
  let projects = document.getElementsByClassName('projects__project');
  let decorators = document.getElementsByClassName(`projects__decoration`);

  for (let i in projects) {
    try {
      projects[i].addEventListener('mouseenter', () => {
        projectsWrapper.classList.add(`main__projects_isHovered${i}`);

        for (let decorator of decorators) {
          decorator.classList.add(`projects__decoration_active-${i}`);
        }
      });
    } catch {}

    try {
      projects[i].addEventListener('mouseleave', () => {
        projectsWrapper.classList.remove(`main__projects_isHovered${i}`);

        for (let decorator of decorators) {
          decorator.classList.remove(`projects__decoration_active-${i}`);
        }
      });
    } catch {}
  }
});
