import React from "react";
import styled from "styled-components";

const LatestBlogPostsCard = props => (
  <Div>
    <Container>
      <Cover>
        <Image source={props.firstImage} />
      </Cover>
    </Container>

    <Hashtag>{props.blogHashtag}</Hashtag>

    <BlogTitle>{props.blogsTitle} </BlogTitle>

    <Excerpt>{props.blogWriteUp}</Excerpt>

    <SecondImage source={props.secondImage} />
    <ThirdImage source={props.thirdImage} />
  </Div>
);

export default LatestBlogPostsCard;

const Div = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 5px;
`;

const Container = styled.View`
  width: 170px;
  height: 136px;
  border-radius: 15px;
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.15);
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

const Hashtag = styled.Text`
  margin-top: 10px;
  font-size: 11px;
  font-weight: 100;
  color: #1d1d26;
`;
const BlogTitle = styled.Text`
  margin-top: 5px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  color: #1d1d26;
  width: 170px;
`;

const Excerpt = styled.Text`
  margin-top: 4px;
  font-size: 11px;
  font-weight: 400;
  color: #1d1d26;
  width: 170px;
  height: 40px;
`;
const SecondImage = styled.Image`
  width: 0%;
  height: 0%;
`;

const ThirdImage = styled.Image`
  width: 0%;
  height: 0%;
`;
