// Point d'entrée : les scripts ci-dessous sont chargés dans l'ordre dans index.html.
window.onload = () => {
  updateHeader();
  startWorkTimer();
  switchTab('home');
  switchMathsSubView('multiplications');
};
