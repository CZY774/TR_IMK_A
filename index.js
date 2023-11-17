// Fungsi untuk memperbarui tampilan berdasarkan status dark mode
function updateTheme() {
    const isDark = isDarkMode();
  
    // Toggle class pada body
    document.body.classList.toggle('dark-mode', isDark);
  
    // Toggle class pada sidebar
    const sidebar = document.getElementById('mySidebar');
    if (sidebar) {
      sidebar.classList.toggle('dark-mode', isDark);
    }
  
    // Toggle class pada elemen yang memiliki kelas .w3-theme-l5
    const themeElements = document.querySelectorAll('.w3-theme-l5');
    themeElements.forEach(element => {
      element.classList.toggle('dark-mode', isDark);
    });
  
    // Ganti warna background dan font
    document.body.style.backgroundColor = isDark ? '#000' : '#fff';
    document.body.style.color = isDark ? '#fff' : '#000';
  
    // Reset icon dark mode
    const darkModeIcon = document.getElementById('dark-mode-icon');
    darkModeIcon.style.transform = isDark ? 'scaleX(-1)' : 'scaleX(1)';
  }
  
  // Panggil updateTheme saat page load
  window.onload = updateTheme;
