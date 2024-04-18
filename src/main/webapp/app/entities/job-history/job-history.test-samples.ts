import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 15043,
};

export const sampleWithPartialData: IJobHistory = {
  id: 6203,
  startDate: dayjs('2024-04-17T20:24'),
};

export const sampleWithFullData: IJobHistory = {
  id: 13850,
  startDate: dayjs('2024-04-18T02:05'),
  endDate: dayjs('2024-04-17T17:37'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
