import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 23365,
  departmentName: 'across',
};

export const sampleWithPartialData: IDepartment = {
  id: 7508,
  departmentName: 'justice against instead',
};

export const sampleWithFullData: IDepartment = {
  id: 1486,
  departmentName: 'green piercing',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'furthermore about but',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
