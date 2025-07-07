import React from "react";

class ErrorBoundaryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error info here if needed
    // console.error(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "#fff3f3",
            color: "#b00020",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
            alt="Error"
            width={80}
            height={80}
            style={{ marginBottom: "1rem" }}
          />
          <h2 style={{ marginBottom: "0.5rem" }}>
            Oops! Something went wrong.
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            An unexpected error has occurred. Please try refreshing the page or
            contact support if the problem persists.
          </p>
          <button className="btn btn-danger" onClick={this.handleReload}>
            Reload Page
          </button>
          <details
            style={{
              marginTop: "1.5rem",
              color: "#333",
              maxWidth: 500,
              wordBreak: "break-all",
            }}
          >
            <summary style={{ cursor: "pointer" }}>Error Details</summary>
            <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>
              {this.state.error?.toString()}
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaryComponent;
