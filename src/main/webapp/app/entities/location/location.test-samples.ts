import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 9670,
};

export const sampleWithPartialData: ILocation = {
  id: 6770,
  streetAddress: 'ephemera without excursion',
  postalCode: 'furthermore atmosphere',
  stateProvince: 'off beside',
};

export const sampleWithFullData: ILocation = {
  id: 27347,
  streetAddress: 'amid',
  postalCode: 'swiftly',
  city: 'Asiafort',
  stateProvince: 'ideate',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
