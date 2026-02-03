function ErrorBanner({ message }) {
  return (
    <div
      style={{
        backgroundColor: "#fee2e2",
        color: "#991b1b",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "16px",
        fontSize: "14px",
        textAlign: "center",
      }}
    >
      {message}
    </div>
  );
}

export default ErrorBanner;
