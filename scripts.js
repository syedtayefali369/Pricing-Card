document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
      const plan = button.parentElement.querySelector('h3').textContent;
      alert(`You selected the ${plan} plan!`);
    });
  });
  