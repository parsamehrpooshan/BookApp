import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">botostart</a> | React.js full course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        Developed by{" "}
        <a
          href="https://github.com/parsamehrpooshan"
          target="_blank"
          rel="noreferrer"
        >
          Parsa Mehrpooshan
        </a>{" "}
        with ❤️
      </footer>
    </>
  );
}

export default Layout;
