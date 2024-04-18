import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 32224,
};

export const sampleWithPartialData: IEmployee = {
  id: 10651,
  firstName: 'Donnell',
  email: 'Ruthie.Leuschke28@hotmail.com',
  salary: 27760,
};

export const sampleWithFullData: IEmployee = {
  id: 23389,
  firstName: 'Jaylen',
  lastName: 'Nolan',
  email: 'Gunnar_Kuhic33@yahoo.com',
  phoneNumber: 'sometimes',
  hireDate: dayjs('2024-04-18T05:24'),
  salary: 30251,
  commissionPct: 30958,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
