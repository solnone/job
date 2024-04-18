import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 26438,
  login: '5bja4f',
};

export const sampleWithPartialData: IUser = {
  id: 4950,
  login: 'iarPU@TR-P',
};

export const sampleWithFullData: IUser = {
  id: 4020,
  login: '^Jh+@g\\BD1NC\\)0l',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
