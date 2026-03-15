"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Navigation, { type SectionId } from "@/components/Navigation/Navigation";
import BackgroundCanvas from "@/components/BackgroundCanvas/BackgroundCanvas";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const TRANSITION_DURATION_MS = 650;
const SECTION_ORDER: SectionId[] = [
  "hero",
  "about",
  "projects",
  "skills",
  "contact",
];

type TransitionState = {
  phase: "idle" | "animating";
  nextSection: SectionId | null;
  direction: -1 | 1;
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [transition, setTransition] = useState<TransitionState>({
    phase: "idle",
    nextSection: null,
    direction: 1,
  });
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const clearPendingTransition = useCallback(() => {
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleNavigate = useCallback(
    (nextSection: SectionId) => {
      if (nextSection === activeSection || transition.phase !== "idle") {
        return;
      }

      const currentIndex = SECTION_ORDER.indexOf(activeSection);
      const nextIndex = SECTION_ORDER.indexOf(nextSection);
      const direction: -1 | 1 = nextIndex < currentIndex ? -1 : 1;

      clearPendingTransition();
      setTransition({ phase: "idle", nextSection, direction });

      frameRef.current = window.requestAnimationFrame(() => {
        setTransition({ phase: "animating", nextSection, direction });
      });

      timeoutRef.current = window.setTimeout(() => {
        setActiveSection(nextSection);
        setTransition({ phase: "idle", nextSection: null, direction });
        timeoutRef.current = null;
      }, TRANSITION_DURATION_MS);
    },
    [activeSection, clearPendingTransition, transition.phase],
  );

  const sections: Record<SectionId, ReactNode> = {
    hero: <Hero />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />,
  };

  useEffect(() => {
    return () => {
      clearPendingTransition();
    };
  }, [clearPendingTransition]);

  const selectedSection = transition.nextSection ?? activeSection;

  return (
    <main className="pageRoot">
      <BackgroundCanvas />
      <div className="contentLayer">
        <div className="pageViewport" aria-live="polite">
          <div className="pageStage">
            <div
              className={`pagePanel pagePanelCurrent pagePanelCurrent${
                transition.direction === -1 ? "Reverse" : "Forward"
              } ${transition.phase === "animating" ? "pagePanelExit" : ""}`}
            >
              {sections[activeSection]}
            </div>

            {transition.nextSection ? (
              <div
                className={`pagePanel pagePanelIncoming pagePanelIncoming${
                  transition.direction === -1 ? "Reverse" : "Forward"
                } ${transition.phase === "animating" ? "pagePanelEnter" : ""}`}
              >
                {sections[transition.nextSection]}
              </div>
            ) : null}
          </div>
        </div>
        <Navigation
          activeSection={selectedSection}
          isTransitioning={transition.phase !== "idle"}
          onNavigate={handleNavigate}
        />
        <Footer />
      </div>
    </main>
  );
}
