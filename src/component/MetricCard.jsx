import {
  FaCaretUp,
  FaCaretDown,
} from "react-icons/fa";
export default function MetricCard ({ metric,  }) {
  const Icon = metric.Icon;
  const TrendIcon = metric.trend === "up" ? FaCaretUp : FaCaretDown;
  return (
    <>
    <article className="metric-card">
        <div className="metric-heading">
          <p>{metric.label}</p>
          <Icon
            className={`social-icon social-icon--${metric.network}`}
            aria-hidden="true"
          />
        </div>

        <p className="metric-value">{metric.value}</p>

        <p className={`trend trend--${metric.trend}`}>
          <TrendIcon aria-hidden="true" />
          <span>{metric.change}</span>
        </p>
      </article>


    </>
  )
}