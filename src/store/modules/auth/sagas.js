import { all, takeLatest, put, call } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { loginSuccess } from './actions';

export function* signin({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.log('usuário não encontrado');
    return;
  }

  yield put(loginSuccess(token, user));

  history.push('/encomendas');
}

export default all([takeLatest('@auth/LOGIN', signin)]);
