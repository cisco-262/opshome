(() => {
  "use strict";

  const DURATION_DEFAULT = 10000;

  class HeroCarousel {
    constructor(root) {
      this.root = root;
      this.slides = Array.from(root.querySelectorAll(".noc-slide"));
      this.segments = Array.from(root.querySelectorAll(".noc-progress-segment"));
      this.previousButton = root.querySelector("[data-carousel-previous]");
      this.nextButton = root.querySelector("[data-carousel-next]");
      this.duration = Number(root.dataset.duration) || DURATION_DEFAULT;
      this.index = 0;
      this.elapsed = 0;
      this.lastFrame = null;
      this.rafId = null;
      this.paused = false;
      this.pointerStartX = null;
      this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

      this.tick = this.tick.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.onVisibilityChange = this.onVisibilityChange.bind(this);
      this.onPointerDown = this.onPointerDown.bind(this);
      this.onPointerUp = this.onPointerUp.bind(this);

      this.bindEvents();
      this.render();
      this.preloadNext();
      this.start();
    }

    bindEvents() {
      this.previousButton?.addEventListener("click", () => this.goTo(this.index - 1, true));
      this.nextButton?.addEventListener("click", () => this.goTo(this.index + 1, true));
      this.segments.forEach((segment, index) => {
        segment.addEventListener("click", () => this.goTo(index, true));
      });
      this.root.addEventListener("mouseenter", () => this.pause());
      this.root.addEventListener("mouseleave", () => this.resume());
      this.root.addEventListener("focusin", () => this.pause());
      this.root.addEventListener("focusout", event => {
        if (!this.root.contains(event.relatedTarget)) this.resume();
      });
      this.root.addEventListener("keydown", this.onKeyDown);
      this.root.addEventListener("pointerdown", this.onPointerDown, { passive: true });
      this.root.addEventListener("pointerup", this.onPointerUp, { passive: true });
      document.addEventListener("visibilitychange", this.onVisibilityChange);
      window.addEventListener("pagehide", () => this.destroy(), { once: true });
    }

    start() {
      if (this.rafId === null) this.rafId = requestAnimationFrame(this.tick);
    }

    tick(timestamp) {
      if (!this.root.isConnected) {
        this.destroy();
        return;
      }
      if (!this.paused && !document.hidden && !this.reducedMotion.matches) {
        if (this.lastFrame !== null) this.elapsed += Math.min(timestamp - this.lastFrame, 250);
        if (this.elapsed >= this.duration) this.goTo(this.index + 1, false);
        this.updateActiveProgress();
      }
      this.lastFrame = timestamp;
      this.rafId = requestAnimationFrame(this.tick);
    }

    goTo(nextIndex, manual) {
      const count = this.slides.length;
      this.index = (nextIndex + count) % count;
      this.elapsed = 0;
      this.lastFrame = null;
      this.render();
      this.preloadNext();
      if (manual) this.start();
    }

    render() {
      this.slides.forEach((slide, index) => {
        const active = index === this.index;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
        if (active) slide.removeAttribute("inert");
        else slide.setAttribute("inert", "");
      });

      this.segments.forEach((segment, index) => {
        const active = index === this.index;
        segment.classList.toggle("is-complete", index < this.index);
        if (active) segment.setAttribute("aria-current", "step");
        else segment.removeAttribute("aria-current");
        const fill = segment.querySelector(".noc-progress-fill");
        if (fill) fill.style.transform = index < this.index ? "scaleX(1)" : "scaleX(0)";
      });
    }

    updateActiveProgress() {
      const fill = this.segments[this.index]?.querySelector(".noc-progress-fill");
      if (!fill) return;
      const progress = Math.min(this.elapsed / this.duration, 1);
      fill.style.transform = `scaleX(${progress})`;
    }

    preloadNext() {
      const next = this.slides[(this.index + 1) % this.slides.length]?.querySelector("img");
      if (!next?.src) return;
      const image = new Image();
      image.src = next.src;
    }

    pause() {
      this.paused = true;
      this.lastFrame = null;
    }

    resume() {
      this.paused = false;
      this.lastFrame = null;
    }

    onKeyDown(event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.goTo(this.index - 1, true);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        this.goTo(this.index + 1, true);
      }
    }

    onVisibilityChange() {
      this.lastFrame = null;
    }

    onPointerDown(event) {
      this.pointerStartX = event.clientX;
    }

    onPointerUp(event) {
      if (this.pointerStartX === null) return;
      const delta = event.clientX - this.pointerStartX;
      this.pointerStartX = null;
      if (Math.abs(delta) < 48) return;
      this.goTo(this.index + (delta < 0 ? 1 : -1), true);
    }

    destroy() {
      if (this.rafId !== null) cancelAnimationFrame(this.rafId);
      this.rafId = null;
      document.removeEventListener("visibilitychange", this.onVisibilityChange);
      this.root.removeEventListener("keydown", this.onKeyDown);
      this.root.removeEventListener("pointerdown", this.onPointerDown);
      this.root.removeEventListener("pointerup", this.onPointerUp);
    }
  }

  document.querySelectorAll("[data-hero-carousel]").forEach(root => new HeroCarousel(root));
})();
