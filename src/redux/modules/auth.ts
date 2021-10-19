import { createAction, createActions, handleActions } from 'redux-actions'

// TS의 문법, 타입을 정의해요
interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error  | null;
}

// 초기값을 정의해요
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
}

// prefix를 설정해요. (접두어?)
const prefix = "my-books/auth";

// 액션 생성 함수 ( 저렇게 prefix를 달면 타입 앞에 프리픽스가 붙게 됩니다.)
export const { pending, success, fail } = createActions(
  'PENDING',
  'SUCCESS',
  "FAIL",
  {prefix}
  );

// 리듀서를 만들거에요
const reducer = handleActions<AuthState, string>({
  PENDING: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  SUCCESS: (state, action) => ({
    token: action.payload,
    loading: false,
    error: null,
  }),
  FAIL: (state, action: any) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
}, initialState, {prefix});

export default reducer;

