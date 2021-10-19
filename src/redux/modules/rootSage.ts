import {all} from 'redux-saga/effects'

export default function* rootSaga(){
  // all 안에 하위 saga를 넣어야 해요.
  yield all([authSage()]);
}

function authSage(): any {
  throw new Error('Function not implemented.');
}
