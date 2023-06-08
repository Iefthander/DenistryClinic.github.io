var sidemenu = new Vue({
    el: "#sidemenu",
    data: {
      navOpen: false
    }
  });
  //ANIMATION
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }

  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.personal__container , .form , .about , page__about , .footer');
  for (let elm of elements) {
    observer.observe(elm);
  };
    //АНИМАЦИЯ ЯКОРЕЙ
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');
  
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  };

  var example2 = new Vue({
    el: '#example-2',
    data: {
      name: ' Руслан Андреевич'
    },
    // определяйте методы в объекте `methods`
    methods: {
      greet: function (event) {
        // `this` внутри методов указывает на экземпляр Vue
        alert('Ваши данные отправлены,' + this.name + '!')
        // `event` — нативное событие DOM
        
      }
    }
  })