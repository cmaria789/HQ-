    const quadros = document.querySelectorAll('.quadro');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.3 });

    quadros.forEach(quadro => observer.observe(quadro));
 