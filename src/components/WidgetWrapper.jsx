import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

export default function WidgetWrapper({ title, children }) {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading...</p>}>
          {children}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
