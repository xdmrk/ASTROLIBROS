// ================================
// CARRUSEL DE DESTACADOS
// ================================

// Cuántos píxeles se mueve el carrusel por clic
const PASO = 200;

// Guardamos hasta dónde hemos desplazado
let posicion = 0;

function moverCarrusel(direccion) {
  const pista = document.getElementById('carrusel');
  const anchoVisible = pista.parentElement.offsetWidth;
  const anchoTotal = pista.scrollWidth;

  posicion -= direccion * PASO;

  // Límite derecho: no pasa del final
  const limiteMax = -(anchoTotal - anchoVisible + 120);
  if (posicion < limiteMax) {
    posicion = limiteMax;
  }

  // Límite izquierdo: no pasa de 0
  if (posicion > 0) {
    posicion = 0;
  }

  pista.style.transform = `translateX(${posicion}px)`;
}
