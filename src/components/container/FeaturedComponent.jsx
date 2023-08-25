
export default function FeaturedComponent({ title, details }) {
  return (
    <div className="featured-component">
      <div className="image"></div>
      <div className="content">
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    </div>
  );
}
