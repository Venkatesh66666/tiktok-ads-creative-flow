function ErrorBanner({ message }) {
  return (
    <div
      style={{
        backgroundColor: "#ffe5e5",
        color: "#b00020",
        padding: "10px",
        marginBottom: "16px",
        borderRadius: "4px",
      }}
    >
      {message}
    </div>
  );
}

export default ErrorBanner;
