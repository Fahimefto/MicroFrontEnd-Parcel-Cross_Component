import React from "react";
import Parcel from "single-spa-react/parcel";

export default function Cross(props) {
  const con = async () => {
    System.import("@app/app1");
  };
  return (
    <section>
      <div>
        <h1>Cross App</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Parcel
          config={(): Promise<import("single-spa").ParcelConfigObject<{}>> =>
            System.import("@app/app1")
          }
        />

        <div>
          <Parcel
            config={(): Promise<import("single-spa").ParcelConfigObject<{}>> =>
              System.import("@app/app2")
            }
          />
        </div>
      </div>
    </section>
  );
}
