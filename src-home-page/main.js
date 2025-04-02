// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
   mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
   });

   // Close mobile menu when clicking a link
   const mobileLinks = mobileMenu.querySelectorAll('a');
   mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
         mobileMenu.classList.add('hidden');
      });
   });
}
