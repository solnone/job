import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 27849,
};

export const sampleWithPartialData: IEmployee = {
  id: 19276,
  phoneNumber: 'ouch times kosher',
  hireDate: dayjs('2024-04-17T09:58'),
};

export const sampleWithFullData: IEmployee = {
  id: 30141,
  firstName: 'Joshuah',
  lastName: 'Runolfsdottir-Abshire',
  email: 'Amber30@yahoo.com',
  phoneNumber: 'once crush',
  hireDate: dayjs('2024-04-18T06:15'),
  salary: 24461,
  commissionPct: 4912,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
