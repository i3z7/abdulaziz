
const collapsibleSections = document.querySelectorAll('.collapsible');

collapsibleSections.forEach((section) => {
  const header = section.querySelector('h2');
  header.addEventListener('click', () => {
    section.classList.toggle('active');
  });
})