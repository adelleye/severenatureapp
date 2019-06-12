import React from "react";
import styled from "styled-components";
import { Dimensions } from "react-native";

const LatestCollection = props => (
  <Container>
    <Cover>
      <ImageForLatestCollection source={props.collectionimage} />
    </Cover>

    <ContainerForTitleAndName>
      <CurrentTitle> {props.currenttitle} </CurrentTitle>
      <NameOfCollection> {props.collectionsname} </NameOfCollection>
    </ContainerForTitleAndName>
  </Container>
);

export default LatestCollection;

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

//White background for image
const Container = styled.View`
  background-color: #f5f9fd;
  width: ${screenWidth - 40};
  height: 481px;
  margin-top: 20px;
  margin-left: 20px;
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

const ImageForLatestCollection = styled.Image`
  width: 100%;
  height: 100%;
`;

//A box or a div for (View latest collection titled) & ("Fossils") so we can position them properly
const ContainerForTitleAndName = styled.View`
  width: 100%;
  margin-top: 380px;
  margin-left: 20px;
  position: absolute;
  z-index: 100;
`;

const CurrentTitle = styled.Text`
  font-size: 17px;
  font-weight: 400;
  color: white;
`;

const NameOfCollection = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: white;
`;
