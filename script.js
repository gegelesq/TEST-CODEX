document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservation-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Merci pour votre réservation!');
      form.reset();
    });
  }
});
