# Cota Cero — sistema visual

**Mundo:** arquitectura de interiores en cálido: hueso, piedra y café casi negro, como madera quemada y concreto claro. El Keyvisual manda; el sitio es su versión viva.

## Color
- Hueso `#E6E2D7` (superficie clara), Piedra `#C3BCAA` (líneas, secundarios sobre oscuro), Café `#2D1918` (superficie oscura principal), Café profundo `#211111` (texto sobre claro, fondo del hero), Grafito `#252525`.
- Un solo acento: ninguno. La energía viene de las fotos. Texto secundario se tinta desde el café (`#5B4A45` sobre hueso), nunca gris.

## Tipografía
- PP Neue Gstaad: Bold para titulares (tracking -0.03em), Regular/Light para texto. Maison Neue Mono para navegación, etiquetas y medidas, en mayúsculas con tracking .14em.
- Mayúsculas sostenidas solo en las cuatro etapas de la metodología.

## Forma y movimiento
- Radios: píldora solo en botones; tarjetas 6px (la cota es una esquina recta). Líneas finas 1px `rgba(piedra,.18)` como retícula de plano.
- Un momento autoral: el mosaico del hero se revela por clip-path escalonado; la metodología cambia de fondo con cross-fade. Ease `cubic-bezier(.23,1,.32,1)`, ≤300ms en UI. `prefers-reduced-motion` respetado.
- Marca: wordmark `#wm` y isotipo `#iso` como símbolos SVG inline con `currentColor`.
