import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { signUp } from "../../actions/auth";
import { setError } from "../../actions/ui";
import RegisterPage from "../../pages/RegisterPage"
jest.mock('../../actions/auth');
jest.mock('../../actions/ui');

const initialState = {
  ui: {
    error: null,
  },
};
const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('<RegisterPage />', () => {
  const store = mockStore(initialState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={ store }>
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    </Provider>
  );

  beforeEach(() => {
    store.clearActions();
    jest.resetAllMocks();
  })
  test('should render and match snapshot', () => {

    expect(wrapper).toMatchSnapshot();
  });

  test('should dispatch setError', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(setError).toHaveBeenCalled();
  });

  test('should dispatch signUp', () => {
    const name = 'goccita';
    const email = 'goccita@abizmo.dev';
    const password = '12345678';
    wrapper.find('#name').simulate('change', { target: { name: 'name', value: name } });
    wrapper.find('#email').simulate('change', { target: { name: 'email', value: email } });
    wrapper.find('#password').simulate('change', { target: { name: 'password', value: password } });
    wrapper.find('#confirmPassword').simulate('change', { target: { name: 'confirmPassword', value: password } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    
    expect(signUp).toHaveBeenCalledWith({ name, email, password });
  });
});
