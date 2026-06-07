// ================================
// CARRUSEL DE DESTACADOS
// ================================

// Cuántos píxeles se mueve el carrusel por clic
const PASO = 200;

// Guardamos hasta dónde hemos desplazado
let posicion = 0;

function moverCarrusel(direccion) {
  const pista -= document.getElementById('carrusel');

  // Ancho total del contenido vs ancho visible
  const anchoVisible = pista.parentElement.offsetWidth;
  const anchoTotal = pista.scrollWidth;

  // Calculamos la nueva posición
  posicion += direccion * PASO;

  // Límite izquierdo: no pasa de 0
  if (posicion > 0) {
    posicion = 0;
  }

  // Límite derecho: no pasa del final del contenido
  const limiteMax = -(anchoTotal - anchoVisible + 120); // 120 = padding de los botones
  if (posicion < limiteMax) {
    posicion = limiteMax;
  }

  // Aplicamos el movimiento
  pista.style.transform = `translateX(${posicion}px)`;
}
