import Swal from 'sweetalert2';

// Konfigurasi default untuk SweetAlert2
export const defaultSwalConfig = {
  title: 'Oops...',
  text: 'Something went wrong!',
  icon: 'error',
  confirmButtonText: 'OK',
};

// Helper function untuk menampilkan SweetAlert2 dengan konfigurasi default
export function showAlert(
  message: string,
  type: 'success' | 'error' = 'error'
) {
  Swal.fire({
    ...defaultSwalConfig,
    title: type === 'success' ? 'Success!' : 'Error!',
    text: message,
    icon: type,
  });
}
