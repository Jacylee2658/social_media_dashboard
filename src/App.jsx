import { Fragment, useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { uid } from 'react-uid';
import "./App.css";
import { Footer } from "./component/Footer";
import { PlatformCard } from "./component/PlatformCard";
import MetricCard from "./component/MetricCard";
import { CardDetails } from "./component/CardDetails";


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
    details:  {
      period: "Last 7 days",
      metrics: [
        {label: "Page Likes", value: "5,420" },
        {label: "Weekly Reach", value: "42.3k" },
        {label: "Engagement Rate", value: "4.8%" },
      ],
      featured: {
        label: "Recent Post",
        title: "A behind-the-scenes look at our latest project",
        result: "2,340 reactions",
      },
    },
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
    details: {
      period: "Last 7 days",
      metrics: [
        {label: "Post Impressions", value: "128k" },
        {label: "Profile Visits", value: "2,310" },
        {label: "Engagement Rate", value: "3.9%" },
      ],
      featured: {
        label: "Recent Post",
        title: "What are you working on this week?",
        result: "340 likes and 82 reposts",
      },
    },
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
    details: {
      period: "Last 7 days",
      metrics: [
        {label: "Accounts Reached", value: "28.5k" },
        {label: "Profile Visits", value: "4,120" },
        {label: "Engagement Rate", value: "6.2%" },
      ],
      featured: {
        label: "Recent Content",
        title: "Our latest behind-the-scenes Reel",
        result: "11.2k plays",
      },
    },
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
    details: {
      period: "Last 7 days",
      metrics: [
        {label: "Monthly Views", value: "86,420" },
        {label: "Watch Time", value: "1,230 hours" },
        {label: "Average View Duration", value: "4:12" },
      ],
      featured: {
        label: "Recent Video",
        title: "How we planned our latest project",
        result: "8,900 views",
      },
    },
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
  const [selectedCardId, setSelectedCardId] = useState(null);

  // useEffect(() => {
  //   document.documentElement.dataset.theme = isDark ? "dark" : "light";
  // }, [isDark]);

  return (
      <Fragment>
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>

        <label className="theme-control">
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          <span className="theme-switch">
            <input
              type="checkbox"
              role="switch"
              checked={isDark}
              onChange={(event) => {
                const nextIsDark = event.target.checked;
                setIsDark(nextIsDark);
                document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
              }}
            />
            <span className="switch-track" aria-hidden="true" />
          </span>
        </label>
        <button onClick={()=> setSelectedCardId(null)}>Home</button>
      </header>

      {selectedCardId ? (
        <CardDetails cardId = {selectedCardId} platforms={platforms} />
      ) : (
        <>
          <section className="platform-grid" aria-label="Social media accounts">
          {platforms.map((platform) =>
          <PlatformCard 
            platform={platform} 
            key={platform.network} 
            onSelect={setSelectedCardId}
            />
          )}
        </section>

        <section className="overview" aria-labelledby="overview-heading">
          <h2 id="overview-heading">Overview - Today</h2>

          <div className="metrics-grid">
            {metrics.map((metric) =>
              <MetricCard metric={metric} key={uid(metric)} />
              )
            }
          </div>
        </section> 
        </>
      )}

      
    </main>
    <Footer />
  </Fragment>
  );
}


export default App;