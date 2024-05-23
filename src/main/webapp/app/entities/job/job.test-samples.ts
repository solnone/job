import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 64,
};

export const sampleWithPartialData: IJob = {
  id: 29074,
  jobTitle: 'Product Branding Planner',
};

export const sampleWithFullData: IJob = {
  id: 19714,
  jobTitle: 'Global Metrics Specialist',
  minSalary: 19416,
  maxSalary: 5608,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
