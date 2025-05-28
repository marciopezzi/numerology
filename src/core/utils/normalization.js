export function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^A-Z]/gi, "") // remove espaços, traços, números, etc.
    .toUpperCase();
}
