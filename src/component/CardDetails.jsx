import React from "react"
export const CardDetails = ({ cardId, platforms }) => {
  const card = platforms.find(
    (item) => item.network === cardId
  );

  if (!card) {
    return <p>We couldn't find that platform.</p>;
  }

  const Icon = card.Icon;

  return (
    <section className="card-details" aria-labelledby="details-heading">
      <div className="details-header">
        <Icon aria-hidden="true" />

        <div>
          <h2 id="details-heading">{card.name} Details</h2>
          <p>
            {card.handle} · {card.details.period}
          </p>
        </div>
      </div>

      <article className="details-summary">
        <p>{card.unit}</p>
        <p>{card.followers}</p>
        <p>{card.change}</p>
      </article>

      <h3>Key Metrics</h3>

      <div className="details-grid">
        {card.details.metrics.map((metric) => (
          <article className="details-metric" key={metric.label}>
            <p>{metric.label}</p>
            <p>{metric.value}</p>
          </article>
        ))}
      </div>

      <article className="featured-content">
        <p>{card.details.featured.label}</p>
        <h3>{card.details.featured.title}</h3>
        <p>{card.details.featured.result}</p>
      </article>
    </section>
  );
};