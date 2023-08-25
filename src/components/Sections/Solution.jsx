import GridTextItem from "../container/GridTextItem";

export default function Solution() {
  return (
    <section id="solution">
      <div className="d-solution">
        <div className="d-solution-title">
          <p>The Solution</p>
          <h1>Composable metering and billing</h1>
        </div>
        <div className="g-container">
          <GridTextItem
            para="Usage monitoring"
            title="Plug-and-play metering"
          />
          <div className="g-item"></div>
          <div className="g-item"></div>
          <GridTextItem
            para="Scalable and low-maintenance"
            title="Out-of-the-box billing system"
          />
          
          <GridTextItem
            para="More control"
            title="Composability and security"
          />
          <div className="g-item"></div>
        </div>
      </div>
    </section>
  );
}
