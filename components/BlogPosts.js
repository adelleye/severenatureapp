import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";

const BlogPosts = props => (
  <Container>
    <ImageContainer>
      <ImageCover>
        <FirstImage source={props.firstImage} />
      </ImageCover>
    </ImageContainer>

    <HashTag>{props.blogHashtag}</HashTag>
    <BlogTitle>{props.blogsTitle} </BlogTitle>
    <BlogWriteUpContainer>
      <BlogWriteUp>{props.blogWriteUp}</BlogWriteUp>
    </BlogWriteUpContainer>
    <SecondImage source={props.secondImage} />
    <ThirdImage source={props.thirdImage} />
    {/*}
    
<ThirdImage source={props.thirdImage} /> */}
  </Container>
);

export default BlogPosts;

const ScreenWidth = Dimensions.get("window").width;

/* 
Blog styling
*/

const Container = styled.View`
  margin-top: 25px;
  margin-left: 0px;
`;
const ImageContainer = styled.View`
  width: ${ScreenWidth - 40};
  height: ${ScreenWidth - 40};
`;

const ImageCover = styled.View`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

const FirstImage = styled.Image`
  width: 100%;
  height: 100%;
`;

//7054E2 , 1d1d26
const HashTag = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 300;
  color: #7054e2;
`;

const BlogTitle = styled.Text`
  margin-top: 5px;

  font-size: 22px;
  font-weight: 400;
  color: #1d1d26;
  width: ${ScreenWidth - 40};
`;

const BlogWriteUpContainer = styled.View`
  width: ${ScreenWidth - 40};
  margin-top: 4px;
`;

//8a898e
const BlogWriteUp = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: #1d1d26;
  height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SecondImage = styled.Image`
  width: 0%;
  height: 0%;
`;

const ThirdImage = styled.Image`
  width: 0%;
  height: 0%;
`;
