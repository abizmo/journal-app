import { mount } from "enzyme";
import { Provider } from "react-redux";
import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { setActive } from "../../actions/notes";
import JournalEntry from "../../components/JournalEntry";
import { notes } from "../../fixtures/notes";
jest.mock('../../actions/notes');

const date = new Date().getTime();
const initialState = {};
const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('<JournalEntry />', () => {
  const store = mockStore(initialState);
  store.dispatch = jest.fn();

  const wrapper = mount(
    <Provider store={store}>
      <JournalEntry
        { ...notes[0] }
        date={ date }
      />
    </Provider>
  );

  test('should render and match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.journal__entry-title').text().trim()).toBe(notes[0].title);
  });

  test('should dispatch setActive', () => {
    wrapper.find('.journal__entry-container').simulate('click');

    expect(setActive).toHaveBeenCalledWith({ ...notes[0], date });
  });
});
