/**
 * GSAP Animation Engine — Sarvagun Gyannodaya Trust
 * 
 * Data-attribute driven animation system using GSAP + ScrollTrigger.
 * Add `data-animate="fade-up"` (etc.) to any element to animate it.
 * 
 * Respects `prefers-reduced-motion` for accessibility.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Accessibility: Respect reduced motion ──
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  // Show everything immediately, no animations
  gsap.set('[data-animate]', { opacity: 1, y: 0, x: 0, scale: 1 });
} else {
  initAnimations();
}

function initAnimations() {
  // ── 1. Fade Up ──
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || '0');
    gsap.fromTo(el,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        }
      }
    );
  });

  // ── 2. Fade In ──
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || '0');
    gsap.fromTo(el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        delay,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        }
      }
    );
  });

  // ── 3. Slide Left (from right) ──
  gsap.utils.toArray<HTMLElement>('[data-animate="slide-left"]').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || '0');
    gsap.fromTo(el,
      { opacity: 0, x: 30 },
      {
        opacity: 1, x: 0,
        duration: 0.9,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true,
        }
      }
    );
  });

  // ── 4. Slide Right (from left) ──
  gsap.utils.toArray<HTMLElement>('[data-animate="slide-right"]').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || '0');
    gsap.fromTo(el,
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        duration: 0.9,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true,
        }
      }
    );
  });

  // ── 5. Scale In ──
  gsap.utils.toArray<HTMLElement>('[data-animate="scale-in"]').forEach((el) => {
    const delay = parseFloat(el.dataset.delay || '0');
    gsap.fromTo(el,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1, scale: 1,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        }
      }
    );
  });

  // ── 6. Stagger Container ──
  // Parent with data-animate="stagger", children get staggered fade-up
  gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
    const staggerDelay = parseFloat(container.dataset.staggerDelay || '0.12');
    const children = container.children;

    if (children.length === 0) return;

    gsap.fromTo(children,
      { opacity: 0, y: 15 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        stagger: staggerDelay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          once: true,
        }
      }
    );
  });

  // ── 7. Counter Animation ──
  gsap.utils.toArray<HTMLElement>('[data-animate="counter"]').forEach((el) => {
    const target = parseInt(el.dataset.target || '0', 10);
    const suffix = el.dataset.suffix || '';
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2.0,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        once: true,
      },
      onUpdate: () => {
        el.textContent = Math.ceil(obj.val).toLocaleString() + suffix;
      }
    });
  });

  // ── 8. Hero Text — Cinematic reveal ──
  gsap.utils.toArray<HTMLElement>('[data-animate="hero-text"]').forEach((el) => {
    // Split into lines/words subtly instead of aggressive trailer effect
    const text = el.textContent?.trim() || '';
    const words = text.split(/\s+/);
    el.innerHTML = words.map(w => `<span class="gsap-word" style="display:inline-block;opacity:0;transform:translateY(10px)">${w}</span>`).join(' ');

    const wordSpans = el.querySelectorAll('.gsap-word');
    gsap.to(wordSpans, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.04,
      ease: 'power2.out',
      delay: 0.1,
    });
  });

  // ── 9. Parallax ──
  gsap.utils.toArray<HTMLElement>('[data-animate="parallax"]').forEach((el) => {
    const speed = parseFloat(el.dataset.speed || '0.15');
    gsap.to(el, {
      y: () => ScrollTrigger.maxScroll(window) * speed * -0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });
  });

  // ── 10. Header shrink on scroll ──
  const topBar = document.querySelector('[data-header-topbar]') as HTMLElement | null;
  const header = document.querySelector('[data-header-main]') as HTMLElement | null;

  if (topBar && header) {
    ScrollTrigger.create({
      start: 80,
      onEnter: () => {
        gsap.to(topBar, { height: 0, opacity: 0, overflow: 'hidden', duration: 0.3, ease: 'power2.out' });
        gsap.to(header, { boxShadow: '0 2px 20px rgba(0,0,0,0.08)', duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(topBar, { height: 'auto', opacity: 1, overflow: 'visible', duration: 0.3, ease: 'power2.out' });
        gsap.to(header, { boxShadow: 'none', duration: 0.3 });
      }
    });
  }
}
