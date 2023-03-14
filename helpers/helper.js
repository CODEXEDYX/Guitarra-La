export const fechas = fecha => {
const data = new  Date(fecha);
const dias = {
month:'long',
year:'numeric',
day:'2-digit'
}

return data.toLocaleDateString('es-ES',dias)
}