import { act } from "@testing-library/react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { login } from "../../actions/auth";
import { signIn } from "../../api/auth";
import JournalRouter from "../../routers/JournalRouter";
jest.mock('../../actions/auth');

const initialState = {
  auth: {},
  notes: {
    active: {},
    notes: [],
  },
  ui: {
    error: null,
  },
};
const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('<JournalRouter />', () => {
  const store = mockStore(initialState);
  store.dispatch = jest.fn();

  test('should dispatch login', async () => {
    let user;
    await act(async () => {
      const email = 'test@test.com';
      const password = '12345678';
      user = await signIn({ email, password })
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <JournalRouter />
          </MemoryRouter>
        </Provider>
      );
    });

    expect(login).toHaveBeenCalledWith(user);
  });
});
