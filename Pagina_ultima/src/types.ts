/**
 * Interfaz que define la estructura de datos para las 
 * ubicaciones globales de BlackTI.
 */
export interface OfficeLocation {
  id: string;          // Identificador único (ej: 'santiago')
  city: string;        // Nombre de la ciudad
  country: string;     // Nombre del país
  /**
   * Coordenadas geográficas necesarias para D3.js
   * Formato: [Longitud, Latitud]
   */
  coordinates: [number, number]; 
  address: string;     // Dirección física de la oficina
  /**
   * Clasificación de la oficina para lógica de negocio y estilos
   */
  type: 'Headquarters' | 'Regional Office' | 'Satellite';
}
