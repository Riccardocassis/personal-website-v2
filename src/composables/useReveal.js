import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useReveal() {

  let triggers = [];

  onMounted(() => {
    // seleziona tutti gli elementi con classe .reveal
    const els = document.querySelectorAll(".reveal");

    els.forEach((el) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(
        el,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      triggers.push(tl);
    });
  });

  onBeforeUnmount(() => {
    triggers.forEach(t => {
      t.scrollTrigger?.kill();
      t.kill();
    });
    triggers = [];
  });
}
