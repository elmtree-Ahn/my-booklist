import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './modules/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSage';


const create = () => {
  // 스토어가 생성되기 전에 사가 미들웨어를 만들어요
  const sagaMiddleware = createSagaMiddleware();

  // 만든 사가 미들웨어를 어플라이미들웨어에 넣어요.
  const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

  // 사가 미들웨어는 스토어를 리턴하기 전 "루트사가"를 넣어줘요. 이건 모듈즈에 만들어야 해요.
  sagaMiddleware.run(rootSaga);
  return store;

}

export default create;