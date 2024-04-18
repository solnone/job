import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'jobApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'region',
    data: { pageTitle: 'jobApp.region.home.title' },
    loadChildren: () => import('./region/region.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'jobApp.country.home.title' },
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'jobApp.location.home.title' },
    loadChildren: () => import('./location/location.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'jobApp.department.home.title' },
    loadChildren: () => import('./department/department.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'jobApp.task.home.title' },
    loadChildren: () => import('./task/task.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'jobApp.employee.home.title' },
    loadChildren: () => import('./employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'jobApp.job.home.title' },
    loadChildren: () => import('./job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'jobApp.jobHistory.home.title' },
    loadChildren: () => import('./job-history/job-history.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
