import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { loginWithEmail, loginWithGoogle } from "../../actions/auth";
import LoginPage from "../../pages/LoginPage";
jest.mock('../../actions/auth');

const middlewares = [thunk];
const mockStore = createMockStore(middlewares);
const initialState = {
  ui: {
    error: null,
    loading: false,
  },
};

describe('<LoginPage />', () => {
  let store = mockStore(initialState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );

  beforeEach(() => {
    store.clearActions();
    jest.resetAllMocks();
  })

  test('should render right', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should dispatch loginWithGoogle', () => {
    wrapper.find('.google-btn').simulate('click');

    expect(loginWithGoogle).toHaveBeenCalled();
  });
  
  test('should dispatch loginWithEmail with goccita@abizmo.dev', () => {
    const email = 'goccita@abizmo.dev';
    const password = '123456';
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(loginWithEmail).toHaveBeenCalledWith({ email, password });
  });
});
