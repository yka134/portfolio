/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  const alterStyles = (visible) => {
    backToTopButton.style.visibility = visible ? "visible" : "hidden";
    backToTopButton.style.opacity = visible ? 1 : 0;
    backToTopButton.style.transform = visible ? "scale(1)" : "scale(0)";
  };

  window.addEventListener("scroll", () => {
    alterStyles(window.scrollY > 700);
  });
}