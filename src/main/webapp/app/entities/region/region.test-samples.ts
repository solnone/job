import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 18385,
};

export const sampleWithPartialData: IRegion = {
  id: 20694,
};

export const sampleWithFullData: IRegion = {
  id: 31260,
  regionName: 'given',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
