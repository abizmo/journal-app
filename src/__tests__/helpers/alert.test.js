import { error, success } from "../../helpers/alert";
import Swal from 'sweetalert2'

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe('Alert tests', () => {
  const message = 'Test';

  test('error should call fire', () => {
    error(message);

    expect(Swal.fire).toHaveBeenCalled();
  })

  test('success should call fire', () => {
    success(message);

    expect(Swal.fire).toHaveBeenCalled();
  })
  
})
