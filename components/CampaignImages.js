import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

const CampaignImages = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
    </Cover>
  </Container>
);

export default CampaignImages;

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

//White background for image
const Container = styled.View`
  background-color: #f5f9fd;
  width: ${screenWidth - 40};
  height: 550px;
  margin-top: 25px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 15px;
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3);
`;

//This "mask" lets the image have rounded corners or a border radius
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
