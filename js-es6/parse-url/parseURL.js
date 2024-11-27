
function parseURL(urlString) {
  // Usamos split para dividir la URL en partes por el caracter '/'
  // Luego usamos filter para eliminar cualquier string vacío
  return urlString.split('/').filter(segment => segment !== '');
}

// Ejemplo de uso:
const segmentsArray = parseURL(`/en-US/docs/Web/API/URL/pathname`);
console.log(segmentsArray); // ["en-US", "docs", "Web", "API", "URL", "pathname"]
