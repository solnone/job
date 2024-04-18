import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 28275,
};

export const sampleWithPartialData: ILocation = {
  id: 12733,
  postalCode: 'decriminalise ah',
};

export const sampleWithFullData: ILocation = {
  id: 14019,
  streetAddress: 'above',
  postalCode: 'though kite',
  city: 'Oberbrunnerstad',
  stateProvince: 'calmly skinny',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
