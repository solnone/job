import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 3945,
};

export const sampleWithPartialData: IJobHistory = {
  id: 6225,
  endDate: dayjs('2024-04-17T07:00'),
  language: 'ENGLISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 6721,
  startDate: dayjs('2024-04-17T19:19'),
  endDate: dayjs('2024-04-17T07:22'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
