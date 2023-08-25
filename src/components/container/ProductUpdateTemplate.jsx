export default function ProductUpdateTemplate({ update }) {
  return (
    <div className="featured-component">
      <div className="image"></div>
      <div className="content">
        <h4>{update}</h4>
        <button>Read more → </button>
      </div>
    </div>
  );
}
