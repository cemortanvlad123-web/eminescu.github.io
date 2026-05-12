document.querySelectorAll(".value").forEach(el => {
  const key = el.dataset.key;
  if (siteData[key]) {
    el.textContent = siteData[key];
  }
});
