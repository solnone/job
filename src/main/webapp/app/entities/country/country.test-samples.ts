import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 22378,
};

export const sampleWithPartialData: ICountry = {
  id: 25978,
};

export const sampleWithFullData: ICountry = {
  id: 17099,
  countryName: 'longingly since',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
