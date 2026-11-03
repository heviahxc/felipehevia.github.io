# Revisión local · 3 de noviembre de 2026

## Alcance y conservación

Rediseño estático sin framework. Se conservan el CV actualizado, los cuatro proyectos y los archivos originales de imágenes. La experiencia y formación se contrastaron con el CV: Grupo Firma termina en mayo de 2023 y la titulación UCM corresponde a 2022. No se publicó disponibilidad laboral sin confirmar.

Al iniciar, Git estaba limpio en `main`. Se guardaron copias de los cuatro archivos de texto originales fuera del repositorio, en la carpeta de trabajo `Portafolio de titulo/portfolio-redesign`, con prefijo `original-`. La aplicación de archivos comprueba sus huellas SHA-256 para detenerse si hubo cambios concurrentes.

## Comprobaciones realizadas

- Microsoft Edge, mediante Playwright: 320, 375, 768, 1024 y 1440 px, sin desbordamiento horizontal.
- Capturas completas de los cinco tamaños; revisión visual de escritorio y móvil.
- Imágenes cargadas, identificadores únicos, enlaces internos válidos y orden de secciones correcto.
- Menú con Enter y Escape; retorno del foco al botón y traslado del foco a la sección seleccionada.
- Filtros: Todos (4), Web (2), Móvil (1), Herramientas (1), con actualización accesible del contador.
- Enlaces de proyectos visibles sin hover.
- CV: descarga completada y respuesta PDF válida. Los dos enlaces apuntan al mismo archivo existente.
- Sin JavaScript: navegación y cuatro proyectos visibles; controles de filtro ocultos.
- Preferencia de movimiento reducido: desplazamiento suave desactivado.
- Recursos locales responden HTTP 200. Sin errores de JavaScript; comprobación de sintaxis de `script.js` correcta.
- Contraste calculado de 177 elementos de texto visibles en escritorio: sin fallos, relación mínima 8,11:1 sobre sus fondos opacos. Esto no equivale a una auditoría integral WCAG.

## Carga local

Medición puntual en Edge, a 1440 px, con servidor en el mismo equipo y sin limitación de red/CPU: LCP 260 ms, CLS 0 y DOMContentLoaded 61 ms. Son medidas locales, no una predicción de rendimiento móvil en producción ni una puntuación Lighthouse.

Las cuatro capturas de proyectos pasan de 2.863.407 a 145.366 bytes (aproximadamente 94,9 % menos). Se conservan sus originales. El retrato se sirve como WebP ajustado al tamaño de uso. No hay fuentes, iconos ni scripts de terceros que bloqueen la carga.

## Enlaces externos

Las páginas de GitHub (perfil, App Salon y App Movies), la demo de Rock Fest y la página de MediaFire devolvieron HTTP 200. Esto comprueba acceso a sus páginas; no se ejecutó el instalador de MediaFire ni se auditó el funcionamiento completo de aplicaciones externas.

LinkedIn devolvió HTTP 999 a la comprobación automatizada; requiere revisión manual. Se conserva el enlace proporcionado en el CV.

## Pendiente o fuera de alcance

- Lighthouse no estaba instalado; no se reporta una puntuación.
- Revisión en dispositivos físicos, lectores de pantalla y Safari/Firefox.
- Confirmar modalidad y disponibilidad laboral antes de publicarlas.
- Ampliar las fichas de proyectos si se aportan resultados, desafíos técnicos o un repositorio del convertidor. No se inventaron métricas ni funciones adicionales.
- Revisar la descarga final de MediaFire y el perfil de LinkedIn manualmente.
- Vista previa social preparada; su URL pública funcionará después de publicar los nuevos archivos.

No se hicieron commits, push ni cambios en la configuración de GitHub Pages.
