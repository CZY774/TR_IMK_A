const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});// pilih element form
const form = document.getElementById('form');

// pilih semua input field di dalam form
const inputs = form.querySelectorAll('input');

// event listener untuk submit form
form.addEventListener('submit', (e) => {

  // cegah submit default
  e.preventDefault();
  
  // reset state validasi
  let isFormValid = true;

  // lakukan loop through semua input 
  inputs.forEach(input => {
  	// jika ada yang kosong
    if(!input.value) {
      // ubah state menjadi false
      isFormValid = false;
    }
  });

  // jika semua input terisi
  if(isFormValid) {
  	// panggil fungsi untuk submit data
    formSubmit();
  }

});

// fungsi untuk submit form
function formSubmit() {
  // proses ajax dsb
  console.log('mengirim data'); 

  // redirect halaman
  window.location.href = '/dashboard'; 
}
