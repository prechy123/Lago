import { useState } from "react";
import ProductUpdateTemplate from "../container/ProductUpdateTemplate";

export default function ProductsUpdate() {
  const [state, setState] = useState(false);
  function handleOnClick() {
    if (!state) {
      return setState(true);
    }
    return setState(false);
  }
  return (
    <section id="product">
      <div>
        <div className="product-title">
          <p>Product update</p>
          <h1>We ship fast and it's only the beginning</h1>
        </div>
        <div className="product-template">
          <ProductUpdateTemplate update="Update #21 - june 12, 2023" />
          <ProductUpdateTemplate update="Update #20 - june 6, 2023" />
          <ProductUpdateTemplate update="Update #19 - june 1, 2023" />
          {state && (
            <>    
              <ProductUpdateTemplate update="Update #18 - may 20, 2023" />
              <ProductUpdateTemplate update="Update #17 - may 10, 2023" />
              <ProductUpdateTemplate update="Update #16 - may 1, 2023" />
              <ProductUpdateTemplate update="Update #15 - april 20, 2023" />
              <ProductUpdateTemplate update="Update #14 - april 10, 2023" />
              <ProductUpdateTemplate update="Update #13 - april 1, 2023" />
              <ProductUpdateTemplate update="Update #12 - march 20, 2023" />
              <ProductUpdateTemplate update="Update #11 - march 10, 2023" />
              <ProductUpdateTemplate update="Update #10 - march 1, 2023" />
            </>
          )}
        </div>
        <div className="show-updates">
          {/* <button onClick={handleOnClick}>See all updates</button> */}
          {state ? (
            <button onClick={handleOnClick}>Hide updates</button>
          ) : (
            <button onClick={handleOnClick}>See all updates</button>
          )}
          <button>See public roadmap</button>
        </div>
      </div>
    </section>
  );
}
