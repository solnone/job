import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '3655b61a-28c0-436b-b53c-55ff632294ce',
};

export const sampleWithPartialData: IAuthority = {
  name: 'f18def93-b4bd-4f20-b96c-e57a59fad0e0',
};

export const sampleWithFullData: IAuthority = {
  name: '4de59c5e-e82c-4f47-8840-964119ddb368',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
