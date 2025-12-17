import { lazy, useState } from "react";
import WidgetWrapper from "./WidgetWrapper";

const Weather = lazy(() => import("./widgets/WeatherWidget"));
const Tasks = lazy(() => import("./widgets/TasksWidget"));
const Analytics = lazy(() => import("./widgets/AnalyticsWidget"));

export default function Dashboard() {
  const [visible, setVisible] = useState({
    weather: true,
    tasks: true,
    analytics: true,
  });

  return (
    <>
      <div className="controls">
        {Object.keys(visible).map(key => (
          <button
            key={key}
            onClick={() =>
              setVisible({ ...visible, [key]: !visible[key] })
            }
          >
            Toggle {key}
          </button>
        ))}
      </div>

      <div className="widgets">
        {visible.weather && (
          <WidgetWrapper title="Weather">
            <Weather />
          </WidgetWrapper>
        )}
        {visible.tasks && (
          <WidgetWrapper title="Tasks">
            <Tasks />
          </WidgetWrapper>
        )}
        {visible.analytics && (
          <WidgetWrapper title="Analytics">
            <Analytics />
          </WidgetWrapper>
        )}
      </div>
    </>
  );
}
