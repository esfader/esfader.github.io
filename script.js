window.addEventListener('resize', () => {
    const aside = document.querySelector('aside');
    const menuButton = document.getElementById('menu-button');
  
    if (window.innerWidth >= 600) {
      // Si el ancho de la ventana es mayor o igual a 600 píxeles, muestra el elemento aside
      aside.style.visibility = 'visible';
  
      // Quita los eventos de clic del botón y del documento
      menuButton.removeEventListener('click', toggleAside);
      document.removeEventListener('click', hideAside);
    } else {
      // Si el ancho de la pantalla es menor a 600 píxeles, oculta el elemento aside
      aside.style.visibility = 'hidden';
  
      // Añade los eventos de clic al botón y al documento
      menuButton.addEventListener('click', toggleAside);
      document.addEventListener('click', hideAside);
    }
  });
  
  // Función para mostrar o ocultar el elemento aside al hacer clic en el botón
  function toggleAside() {
    const aside = document.querySelector('aside');
    aside.style.visibility = aside.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }
  
  // Función para ocultar el elemento aside al hacer clic en cualquier lugar del documento excepto en el botón y el aside
  function hideAside(event) {
    const aside = document.querySelector('aside');
    const menuButton = document.getElementById('menu-button');
    if (event.target !== menuButton && event.target !== aside) {
      aside.style.visibility = 'hidden';
    }
  }
  