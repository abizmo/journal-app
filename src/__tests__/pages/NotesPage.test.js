import { mount } from "enzyme";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import NotesPage from "../../pages/NotesPage";
import { notes } from '../../fixtures/notes'
import { setActive } from "../../actions/notes";
jest.mock('../../actions/notes');

const initialState = {
  notes: {
    active: {
      ...notes[0],
    },
    notes,
  }
};
const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('<NotesPage />', () => {
  const store = mockStore(initialState);
  store.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={store}>
      <NotesPage />
    </Provider>
  );

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should dispatch setActive', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        name: 'title',
        value: 'Test title',
      },
    });

    expect(setActive).toHaveBeenCalledWith({ ...notes[0], title: 'Test title' });
  });
});
