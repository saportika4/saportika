

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__fadeInUp');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__fadeInUp');
    });
  });
  
  observer.observe(document.querySelector('.observ-wrapper'));

//   2nd observer

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ2');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__slideInLeft');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__slideInLeft');
    });
  });
  
  observer2.observe(document.querySelector('.observ-wrapper2'));

  //   3rd observer

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ3');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__fadeInTopRight');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      // square.classList.remove('animate__fadeInRight');
    });
  });
  
  observer3.observe(document.querySelector('.observ-wrapper3'));


//   4th observer

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ4');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__fadeInUp');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__fadeInUp');
    });
  });
  
  observer4.observe(document.querySelector('.observ-wrapper4'));


//   5th observer

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ5');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__bounceInLeft');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__bounceInLeft');
    });
  });
  
  observer5.observe(document.querySelector('.observ-wrapper5'));


  //   6th observer

const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ6');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__zoomIn');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__zoomIn');
    });
  });
  
  observer6.observe(document.querySelector('.observ-wrapper6'));

    //   7th observer

const observer7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ7');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__fadeInUp');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__fadeInUp');
    });
  });
  
  observer7.observe(document.querySelector('.observ-wrapper7'));

      //   8th observer

const observer8 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ8');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__fadeInUp');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      // square.classList.remove('animate__fadeInUp');
    });
  });
  
  observer8.observe(document.querySelector('.observ-wrapper8'));

  //   9th observer

const observer9 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.observ9');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__bounceInLeft');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__bounceInLeft');
    });
  });
  
  observer9.observe(document.querySelector('.observ-wrapper9'));