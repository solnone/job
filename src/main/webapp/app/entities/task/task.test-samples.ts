import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 8662,
};

export const sampleWithPartialData: ITask = {
  id: 19960,
  title: 'versus sympathetically',
};

export const sampleWithFullData: ITask = {
  id: 7069,
  title: 'afore',
  description: 'meh correctly',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
