const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active class to the clicked tab
    tab.classList.add('active');

    const targetSectionId = tab.dataset.tab;
    const targetSection = document.getElementById(targetSectionId);
    // Remove active class from all sections
    sections.forEach(section => section.classList.remove('active'));
    // Add active class to the target section
    targetSection.classList.add('active');
  });
});