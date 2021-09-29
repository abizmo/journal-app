import Swal from "sweetalert2"

export const error = (message) => Swal.fire('Error', message, 'error');
export const success = (title) => Swal.fire({
  icon: 'success',
  title,
  showConfirmButton: false,
  timer: 1500,
});
