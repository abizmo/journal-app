import { mount } from "enzyme";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { signOut } from "../../actions/auth";
import { newNote } from "../../actions/notes";
import Sidebar from '../../components/Sidebar';
jest.mock('../../actions/auth');
jest.mock('../../actions/notes');

const initialState = {
  auth: {
    name: 'goccita',
  },
  notes: {
    notes: [],
  },
};
const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('<Sidebar />', () => {
  const store = mockStore(initialState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <Sidebar />
    </Provider>
  );

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span').text().trim()).toBe('goccita');
  });
  
  test('should dispatch signOut', () => {
    wrapper.find('button').simulate('click');

    expect(signOut).toHaveBeenCalled();
  });
  
  test('should dispatch newNote', () => {
    wrapper.find('#new').simulate('click');
    
    expect(newNote).toHaveBeenCalled();
  });
});
