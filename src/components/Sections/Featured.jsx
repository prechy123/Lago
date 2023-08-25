import FeaturedComponent from "../container/FeaturedComponent";

export default function Featured() {
  return (
    <section id="featured">
      <div className="feature-wrap">
        <div className="title">
          <p>Featured in</p>
          <h1>Lago shines in the limelight of billing</h1>
        </div>
        <div className="components">
          <FeaturedComponent
            title="Building a payments & biling system on open source with Joel Taylor"
            details="Billing Enigineer af Github"
          />
          <FeaturedComponent
            title="Biling systems are a nightmare for engineers"
            details="777 posts & 222 on HackerNews"
          />
          <FeaturedComponent
            title="Open Source Usage-Based Biling with Lago"
            details="By Robby nfioqnf ifqjq dqwub"
          />
          <FeaturedComponent
            title="Why doesn't Stripe use Stripe Billing?"
            details="332points % 183 comments on ackernes"
          />
          <FeaturedComponent
            title="Devtool & Product of the Month"
            details="About 1300 upvotes foe the launch"
          />
          <FeaturedComponent
            title="Top of Hacker News with Anh-Tho from Lago"
            details="Interview performed by Jack Bridge"
          />
        </div>
      </div>
    </section>
  );
}
