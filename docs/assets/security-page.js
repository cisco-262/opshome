document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(document.querySelectorAll(".security-toc a[href^='#']"));
  const entries = links
    .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
    .filter((entry) => entry.section);

  if (!entries.length) return;

  const setActive = (activeLink) => {
    links.forEach((link) => {
      const active = link === activeLink;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const initial = entries.find(({ link }) => link.hash === window.location.hash) || entries[0];
  setActive(initial.link);

  links.forEach((link) => link.addEventListener("click", () => setActive(link)));

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((observed) => {
    const visible = observed
      .filter((item) => item.isIntersecting)
      .sort((left, right) => Math.abs(left.boundingClientRect.top) - Math.abs(right.boundingClientRect.top));
    if (!visible.length) return;
    const current = entries.find(({ section }) => section === visible[0].target);
    if (current) setActive(current.link);
  }, { rootMargin: "-18% 0px -68% 0px", threshold: 0 });

  entries.forEach(({ section }) => observer.observe(section));
});
