// script.js
// positions the custom cursor circle inside the profile container
(function () {
  const container = document.getElementById('profileContainer');
  const cursor = document.getElementById('cursorRing');
  const ringGlow = document.getElementById('ringGlow');

  if (!container || !cursor) return;

  function setPos(e) {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // x within container
    const y = e.clientY - rect.top;  // y within container

    // center the cursor element at pointer location
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    // slightly offset glow for depth
    ringGlow.style.left = `${rect.width / 2 + (x - rect.width/2) * 0.12}px`;
    ringGlow.style.top  = `${rect.height / 2 + (y - rect.height/2) * 0.12}px`;
  }

  // show/hide handled by CSS hover, but we update positions during movement
  container.addEventListener('mousemove', setPos);
  // Also update on touchmove for mobile friendly (if needed)
  container.addEventListener('touchmove', function (ev) {
    if (ev.touches && ev.touches[0]) setPos(ev.touches[0]);
  });

  // On leaving container reset position (optional)
  container.addEventListener('mouseleave', function () {
    // return to center
    cursor.style.left = '50%';
    cursor.style.top = '50%';
    ringGlow.style.left = '50%';
    ringGlow.style.top = '50%';
  });

  // Set footer year
  const y = new Date().getFullYear();
  const el = document.getElementById('yr');
  if (el) el.textContent = y;
})();
