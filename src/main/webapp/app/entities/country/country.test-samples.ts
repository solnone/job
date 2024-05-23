import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 5156,
};

export const sampleWithPartialData: ICountry = {
  id: 30937,
};

export const sampleWithFullData: ICountry = {
  id: 6656,
  countryName: 'worthless popularise',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
