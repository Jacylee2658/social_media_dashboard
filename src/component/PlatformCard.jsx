
import {
  FaCaretUp,
  FaCaretDown,
} from "react-icons/fa";

function PlatformCard({ platform, onSelect }) {
  const Icon = platform.Icon;
  const TrendIcon =
    platform.trend === "up" ? FaCaretUp : FaCaretDown;
    const selectCard = () => onSelect(platform.network)

  return (
    <article
      className="platform-card"
      role="button"
      tabIndex={0}
      onClick={selectCard}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " "){
          event.preventDefault();
          selectCard();
        }
      }}
      // aria-label={`${platform.name} account`}
    >
      <div className="social-account">
        <Icon
          className={`social-icon social-icon--${platform.network}`}
          aria-hidden="true"
        />
        <span>{platform.handle}</span>
      </div>

      <p className="platform-count">{platform.followers}</p>
      <p className="platform-unit">{platform.unit}</p>

      <p className={`trend trend--${platform.trend}`}>
        <TrendIcon aria-hidden="true" />
        <span>{platform.change}</span>
      </p>
    </article>
  );
}

export { PlatformCard };