import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 11424,
};

export const sampleWithPartialData: IRegion = {
  id: 892,
  regionName: 'helicopter knavishly ravioli',
};

export const sampleWithFullData: IRegion = {
  id: 29684,
  regionName: 'reasoning lean unless',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
