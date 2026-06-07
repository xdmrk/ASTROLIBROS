const PASO = 200;
let posicion = 0;

function moverCarrusel(direccion) {
  const pista = document.getElementById('carrusel');
  const anchoVisible = pista.parentElement.offsetWidth;
  const anchoTotal = pista.scrollWidth;

  // derecha = -1 (mueve contenido a la izquierda para ver más a la derecha)
  // izquierda = 1 (mueve contenido a la derecha para volver)
  posicion += direccion * PASO;

  if (posicion > 0) posicion = 0;
  
  const limiteMax = -(anchoTotal - anchoVisible);
  if (posicion < limiteMax) posicion = limiteMax;

  pista.style.transform = `translateX(${posicion}px)`;
}
