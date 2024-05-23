import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './task.reducer';

export const TaskDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const taskEntity = useAppSelector(state => state.task.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="taskDetailsHeading">
          <Translate contentKey="jobApp.task.detail.title">Task</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{taskEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="jobApp.task.title">Title</Translate>
            </span>
            <UncontrolledTooltip target="title">
              <Translate contentKey="jobApp.task.help.title" />
            </UncontrolledTooltip>
          </dt>
          <dd>{taskEntity.title}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="jobApp.task.description">Description</Translate>
            </span>
            <UncontrolledTooltip target="description">
              <Translate contentKey="jobApp.task.help.description" />
            </UncontrolledTooltip>
          </dt>
          <dd>{taskEntity.description}</dd>
          <dt>
            <Translate contentKey="jobApp.task.job">Job</Translate>
          </dt>
          <dd>
            {taskEntity.jobs
              ? taskEntity.jobs.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {taskEntity.jobs && i === taskEntity.jobs.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/task" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/task/${taskEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default TaskDetail;