import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 20942,
};

export const sampleWithPartialData: ITask = {
  id: 16166,
  title: 'curiously last',
};

export const sampleWithFullData: ITask = {
  id: 20468,
  title: 'but daintily',
  description: 'ack usually',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
