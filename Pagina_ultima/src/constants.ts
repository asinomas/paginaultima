import { OfficeLocation } from './types';

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'santiago',
    city: 'Santiago',
    country: 'Chile',
    coordinates: [-70.5638, -33.4078],
    address: 'Av Apoquindo 6410, Of 605, Las Condes',
    type: 'Headquarters'
  },
  {
    id: 'buenos-aires',
    city: 'Buenos Aires',
    country: 'Argentina',
    coordinates: [-58.3816, -34.6037],
    address: 'Av. del Libertador 602, CABA',
    type: 'Regional Office'
  },
   {
    id: 'lima',
    city: 'Lima',
    country: 'Perú',
    coordinates: [-77.0428, -12.0464],
    address: 'Av. Víctor Andrés Belaúnde 147, San Isidro',
    type: 'Satellite'
  },
  {
  id: 'bogota',
    city: 'Bogotá',
    country: 'Colombia',
    coordinates: [-74.0721, 4.7110],
    address: 'Carrera 7 # 71-21, Torre B, Chapinero',
    type: 'Satellite'
  },
  {
    id: 'dallas',
    city: 'Dallas',
    country: 'USA',
    coordinates: [-96.7970, 32.7767],
    address: '1717 Main St, Dallas, TX 75201',
    type: 'Regional Office'
  },
  {
    id: 'madrid',
    city: 'Madrid',
    country: 'España',
    coordinates: [-3.7038, 40.4168],
    address: 'Paseo de la Castellana 200, Madrid',
    type: 'Regional Office'
  },
 
];
