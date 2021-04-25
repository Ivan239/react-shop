function Footer() {
  return (
    <footer className="page-footer green lighten-4">
      <div className="container">
        © {new Date().getFullYear()} Ivan Obraztsov Inc.
      </div>
    </footer>
  );
}

export { Footer };
