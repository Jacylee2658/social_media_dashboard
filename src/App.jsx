import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCaretUp,
  FaCaretDown,
} from "react-icons/fa";
import "./App.css";

const platforms = [
  {
    name: "Facebook",
    network: "facebook",
    handle: "@nathanf",
    followers: "1987",
    unit: "Followers",
    change: "12 Today",
    trend: "up",
    Icon: FaFacebookF,
  },
  {
    name: "Twitter",
    network: "twitter",
    handle: "@nathanf",
    followers: "1044",
    unit: "Followers",
    change: "99 Today",
    trend: "up",
    Icon: FaTwitter,
  },
  {
    name: "Instagram",
    network: "instagram",
    handle: "@realnathanf",
    followers: "11k",
    unit: "Followers",
    change: "1099 Today",
    trend: "up",
    Icon: FaInstagram,
  },
  {
    name: "YouTube",
    network: "youtube",
    handle: "Nathan F.",
    followers: "8239",
    unit: "Subscribers",
    change: "144 Today",
    trend: "down",
    Icon: FaYoutube,
  },
];

const metrics = [
  { label: "Page Views", value: "87", change: "3%", trend: "up", network: "facebook", Icon: FaFacebookF },
  { label: "Likes", value: "52", change: "2%", trend: "down", network: "facebook", Icon: FaFacebookF },
  { label: "Likes", value: "5462", change: "2257%", trend: "up", network: "instagram", Icon: FaInstagram },
  { label: "Profile Views", value: "52k", change: "1375%", trend: "up", network: "instagram", Icon: FaInstagram },
  { label: "Retweets", value: "117", change: "303%", trend: "up", network: "twitter", Icon: FaTwitter },
  { label: "Likes", value: "507", change: "553%", trend: "up", network: "twitter", Icon: FaTwitter },
  { label: "Likes", value: "107", change: "19%", trend: "down", network: "youtube", Icon: FaYoutube },
  { label: "Total Views", value: "1407", change: "12%", trend: "down", network: "youtube", Icon: FaYoutube },
];

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>

        <label className="theme-control">
          <span>Dark Mode</span>
          <span className="theme-switch">
            <input
              type="checkbox"
              role="switch"
              checked={isDark}
              onChange={(event) => setIsDark(event.target.checked)}
            />
            <span className="switch-track" aria-hidden="true" />
          </span>
        </label>
      </header>

      <section className="platform-grid" aria-label="Social media accounts">
        {platforms.map((platform) => {
          const Icon = platform.Icon;
          const TrendIcon = platform.trend === "up" ? FaCaretUp : FaCaretDown;

          return (
            <article className="platform-card" key={platform.name}>
              <div
                className="social-account"
                aria-label={`${platform.name} account ${platform.handle}`}
              >
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
        })}
      </section>

      <section className="overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading">Overview - Today</h2>

        <div className="metrics-grid">
          {metrics.map((metric, index) => {
            const Icon = metric.Icon;
            const TrendIcon = metric.trend === "up" ? FaCaretUp : FaCaretDown;

            return (
              <article className="metric-card" key={`${metric.label}-${index}`}>
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
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;