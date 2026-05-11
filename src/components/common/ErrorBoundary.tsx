import { Component,type ErrorInfo,type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) return fallback;

      return (
        <div style={styles.container}>
          <div style={styles.card}>
            <div style={styles.icon}>⚠️</div>
            <h2 style={styles.title}>Something went wrong</h2>
            <p style={styles.message}>
              {error?.message || "An unexpected error occurred."}
            </p>
            <button style={styles.button} onClick={this.handleReset}>
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return children;
  }
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    minHeight: "200px",
  },
  card: {
    background: "#fff",
    padding: "32px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    textAlign: "center" as const,
    maxWidth: "400px",
    border: "1px solid #fee2e2",
  },
  icon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  title: {
    margin: "0 0 8px",
    color: "#1f2937",
    fontSize: "20px",
  },
  message: {
    margin: "0 0 24px",
    color: "#6b7280",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  button: {
    padding: "10px 24px",
    background: "#6366f1",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default ErrorBoundary;
