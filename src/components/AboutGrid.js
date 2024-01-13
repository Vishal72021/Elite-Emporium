import React from "react";

import AboutCarousel from "../components/AboutCarousel";
import AboutRow from "../components/AboutRow";
import AboutRowFeaturette from "../components/AboutRowFeaturette";
import featuretteData from "../featuretteData";
import avatarData from "../avatarData";

export default function AboutGrid() {
  const avatarGroup = avatarData.map((item) => {
    return <AboutRow key={item.id} {...item} />;
  });
  const featuretteGroup = featuretteData.map((item) => {
    return (
      <>
        <hr
          className="featurette divider"
          style={{ margin: "5rem 0", padding: "2.5rem 0", marginBottom: 0 }}
        />
        <AboutRowFeaturette key={item.id} {...item} />
      </>
    );
  });
  return (
    <>
      <div className="main bg-warning text-dark">
        <AboutCarousel />
        <div className="container marketing">
          {avatarGroup}
          {featuretteGroup}
          <hr
            className="featurette divider"
            style={{ margin: "5rem 0", padding: "2.5rem 0", marginBottom: 0 }}
          />
        </div>
      </div>
    </>
  );
}
