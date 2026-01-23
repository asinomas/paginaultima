export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  /**
   * Formato: [Longitud, Latitud]
   * Es vital para que el mapa D3 ubique el punto correctamente.
   */
  coordinates: [number, number];
  address: string;
  type: 'Headquarters' | 'Regional Office' | 'Satellite';
}
