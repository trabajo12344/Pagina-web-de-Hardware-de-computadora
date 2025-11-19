
document.addEventListener('DOMContentLoaded', function(){
  const cards = document.querySelectorAll('.comp-card');
  const infoPopup = document.getElementById('infoPopup');
  const infoTitle = document.getElementById('infoTitle');
  const infoContent = document.getElementById('infoContent');
  const closePopup = document.getElementById('closePopup');

  function showInfo(card){
    const titulo = card.dataset.titulo || 'Componente';
    const contenido = card.dataset.contenido || 'Información no disponible.';
    infoTitle.textContent = titulo;
    infoContent.textContent = contenido;
    infoPopup.classList.add('show');
    infoPopup.setAttribute('aria-hidden','false');
  }

  function hideInfo(){
    infoPopup.classList.remove('show');
    infoPopup.setAttribute('aria-hidden','true');
  }

  cards.forEach(card => {
    card.addEventListener('click', () => showInfo(card));
    card.addEventListener('keydown', (e) => { if(e.key === 'Enter') showInfo(card); });
    card.addEventListener('mouseenter', () => showInfo(card));
    card.addEventListener('mouseleave', () => hideInfo());
  });

  closePopup.addEventListener('click', hideInfo);

  document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
    });
  });
});