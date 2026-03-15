import type { IconType } from "react-icons";
import {
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaHouse,
  FaUser,
} from "react-icons/fa6";
import styles from "./Navigation.module.scss";

export type SectionId = "hero" | "about" | "projects" | "skills" | "contact";

const navLinks = [
  { label: "Home", section: "hero", icon: FaHouse },
  { label: "About", section: "about", icon: FaUser },
  { label: "Projects", section: "projects", icon: FaFolderOpen },
  { label: "Skills", section: "skills", icon: FaCode },
  { label: "Contact", section: "contact", icon: FaEnvelope },
] as const satisfies ReadonlyArray<{
  label: string;
  section: SectionId;
  icon: IconType;
}>;

type NavigationProps = {
  activeSection: SectionId;
  isTransitioning: boolean;
  onNavigate: (section: SectionId) => void;
};

const Navbar = ({
  activeSection,
  isTransitioning,
  onNavigate,
}: NavigationProps) => {
  const linkClass = (section: SectionId) =>
    `${styles.sectionNavButton} ${
      activeSection === section
        ? styles.sectionNavButtonActive
        : styles.sectionNavButtonInactive
    }`;

  return (
    <nav className={styles.sectionNav} aria-label="Section navigation">
      <ul className={styles.sectionNavList}>
        {navLinks.map((link) => (
          <li key={link.section} className={styles.sectionNavItem}>
            <button
              type="button"
              onClick={() => onNavigate(link.section)}
              disabled={isTransitioning}
              className={linkClass(link.section)}
              aria-pressed={activeSection === link.section}
              aria-label={link.label}
            >
              <link.icon className={styles.sectionNavIcon} aria-hidden="true" />
              <span className={styles.sectionNavTooltip} role="tooltip">
                {link.label}
              </span>
              <span className="sr-only">{link.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
