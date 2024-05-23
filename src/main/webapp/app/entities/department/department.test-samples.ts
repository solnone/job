import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 15764,
  departmentName: 'as unto psst',
};

export const sampleWithPartialData: IDepartment = {
  id: 29177,
  departmentName: 'obfuscate particular hence',
};

export const sampleWithFullData: IDepartment = {
  id: 3534,
  departmentName: 'reliability throughout',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'shoreline blah more',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
