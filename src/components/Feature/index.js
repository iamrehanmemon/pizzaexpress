import {
  FeatureContainer,
  FeatureHeading,
  FeatureDesc,
  FeatureButton
} from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <FeatureHeading>Pizza of the Day</FeatureHeading>
      <FeatureDesc>
        Truffle alfredo sauce topped with 24 carat gold dust.
      </FeatureDesc>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
