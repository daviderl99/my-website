import styles from "./WorkInProgress.module.scss";

export default function WorkInProgress() {
  return (
    <section id="wip" className={styles.wip}>
      <div className="container">
        <h1>Work In Progress</h1>
        <p>
          Sorry, this page is currently under construction. Please check back
          soon!
        </p>
        <div className={styles.progress} aria-hidden>
          <div className={styles.progressBar}></div>
        </div>
      </div>
    </section>
  );
}
