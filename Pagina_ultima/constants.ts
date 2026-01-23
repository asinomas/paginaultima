import { OfficeLocation } from './types';

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'santiago',
    city: 'Santiago',
    country: 'Chile',
    coordinates: [-70.6483, -33.4489],
    address: 'Av. Vitacura 2670, Piso 15, Las Condes',
    type: 'Headquarters'
  },
  {
    id: 'miami',
    city: 'Miami',
    country: 'USA',
    coordinates: [-80.1918, 25.7617],
    address: '800 Brickell Ave, Miami, FL 33131',
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
  {
    id: 'mexico-city',
    city: 'Ciudad de México',
    country: 'México',
    coordinates: [-99.1332, 19.4326],
    address: 'Paseo de la Reforma 222, CDMX',
    type: 'Satellite'
  },
  {
    id: 'lima',
    city: 'Lima',
    country: 'Perú',
    coordinates: [-77.0428, -12.0464],
    address: 'Av. Víctor Andrés Belaúnde 147, San Isidro',
    type: 'Satellite'
  }
];
