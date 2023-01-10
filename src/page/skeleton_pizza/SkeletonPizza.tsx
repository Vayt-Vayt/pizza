import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonPizza: React.FC = () => (
  <ContentLoader
    speed={2}
    width={340}
    height={470}
    viewBox="0 0 340 470"
    backgroundColor="#deddda"
    foregroundColor="#ecebeb"
  >
    <rect x="22" y="5" rx="130" ry="130" width="260" height="260" />
    <rect x="8" y="320" rx="15" ry="15" width="280" height="30" />
    <rect x="12" y="432" rx="10" ry="10" width="120" height="25" />
    <rect x="160" y="425" rx="20" ry="20" width="135" height="35" />
    <rect x="8" y="275" rx="10" ry="10" width="280" height="25" />
    <rect x="8" y="370" rx="15" ry="15" width="280" height="30" />
  </ContentLoader>
);
