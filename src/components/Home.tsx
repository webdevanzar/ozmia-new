import { useOutletContext } from "react-router-dom";
import { AboutSection } from "./AboutSection";
import { BannerSection } from "./BannerSection";
import { CollectionSection } from "./CollectionSection";
import { FeedbackSection } from "./FeedbackSection";
import { HistorySection } from "./HistorySection";
import { ProductSection } from "./ProductSection";
import React from "react";

type RefContext = {
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    collectionRef: React.RefObject<HTMLDivElement>;
    shopRef: React.RefObject<HTMLDivElement>;
  };
};

const Home = () => {
  const { refs } = useOutletContext<RefContext>();

  return (
    <>
      {/* <BannerSection /> */}
      <div ref={refs.aboutRef}>
        <AboutSection />
      </div>
      <div ref={refs.shopRef}>
        <ProductSection />
      </div>
      <div ref={refs.collectionRef}>
        <CollectionSection />
      </div>
      <FeedbackSection />
      <HistorySection />
    </>
  );
};

export default Home;
