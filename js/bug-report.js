/*
 * Signalement de bugs — stockage local uniquement.
 * Le bouton ouvre un formulaire prérempli avec le contexte visible du jeu.
 * Le rapport peut être copié puis envoyé manuellement à la personne qui
 * maintient l’application ; aucune donnée n’est envoyée automatiquement.
 */

function getBugContext() {
  const profile = typeof getProfile === 'function' ? getProfile() : null;
  const theme = typeof curWeek !== 'undefined' && curWeek ? curWeek.title : '';
  const word = typeof sessionWords !== 'undefined' && sessionWords[typeof wordIdx !== 'undefined' ? wordIdx : 0]
    ? sessionWords[wordIdx].word : '';
  return [
    theme ? `Thème : ${theme}` : '',
    word ? `Mot concerné : ${word}` : '',
    profile?.name ? `Profil : ${profile.name}` : '',
    `Page : ${document.title}`,
    `Date : ${new Date().toLocaleString('fr-FR')}`
  ].filter(Boolean).join('\n');
}

function openBugReport() {
  const modal = document.getElementById('bug-report-modal');
  const context = document.getElementById('bug-report-context');
  const details = document.getElementById('bug-report-details');
  if (!modal) return;
  if (context) context.value = getBugContext();
  if (details && !details.value) details.focus();
  modal.classList.remove('hidden');
}

function closeBugReport() {
  document.getElementById('bug-report-modal')?.classList.add('hidden');
}

function saveBugReport(event) {
  event.preventDefault();
  const details = document.getElementById('bug-report-details')?.value.trim();
  const context = document.getElementById('bug-report-context')?.value.trim();
  if (!details) return;
  const reports = JSON.parse(localStorage.getItem('bossCm1BugReports') || '[]');
  reports.push({ details, context, createdAt: new Date().toISOString() });
  localStorage.setItem('bossCm1BugReports', JSON.stringify(reports));
  const feedback = document.getElementById('bug-report-feedback');
  if (feedback) feedback.textContent = '✅ Signalement enregistré sur cet appareil. Tu peux maintenant le copier et l’envoyer.';
  const copyButton = document.getElementById('bug-report-copy');
  if (copyButton) copyButton.classList.remove('hidden');
}

async function copyBugReport() {
  const details = document.getElementById('bug-report-details')?.value.trim() || '';
  const context = document.getElementById('bug-report-context')?.value.trim() || '';
  const text = `Bug dans Boss du CM1\n\n${details}\n\n${context}`;
  try {
    await navigator.clipboard.writeText(text);
    const feedback = document.getElementById('bug-report-feedback');
    if (feedback) feedback.textContent = '✅ Rapport copié. Tu peux le coller dans un message.';
  } catch {
    window.prompt('Copie ce rapport :', text);
  }
}

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeBugReport();
});
