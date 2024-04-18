import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 10423,
};

export const sampleWithPartialData: IJob = {
  id: 9884,
  jobTitle: 'Regional Data Engineer',
  minSalary: 8161,
  maxSalary: 18891,
};

export const sampleWithFullData: IJob = {
  id: 7412,
  jobTitle: 'Chief Response Consultant',
  minSalary: 7051,
  maxSalary: 29006,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
