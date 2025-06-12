 const formulario = document.getElementById('formulario');

  formulario.addEventListener('submit', function () {
    setTimeout(() => {
      formulario.reset();
    }, 300);
  });