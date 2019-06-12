import React from "React";
import styled from "styled-components";
import {
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  RefreshControl,
  Button
} from "react-native";
import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view-universal";
import { Icon } from "expo";

class SelectedBlogScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{
                position: "absolute",
                top: 20,
                right: 20
              }}
            >
              <CloseView>
                <Icon.Ionicons
                  name="ios-close"
                  size={36}
                  style={{ marginTop: -2 }}
                  color="#0601F5"
                />
              </CloseView>
            </TouchableOpacity>

            <TitleOfPageContainer>
              <TitleOfPage>{section.blogsTitle}</TitleOfPage>
            </TitleOfPageContainer>

            <HashtagContainer>
              <HashtagForBlogPost>{section.blogHashtag}</HashtagForBlogPost>
            </HashtagContainer>

            <FirstImageContainer>
              <FirstImageCover>
                <FirstImage source={section.firstImage} />
              </FirstImageCover>
            </FirstImageContainer>

            <WriteUpContainer>
              <WriteUpForBlogPost>{section.blogWriteUp}</WriteUpForBlogPost>
            </WriteUpContainer>

            <SecondImageContainer>
              <SecondImageCover>
                <SecondImage source={section.secondImage} />
              </SecondImageCover>
            </SecondImageContainer>

            <ThirdImageContainer>
              <ThirdImageCover>
                <ThirdImage source={section.thirdImage} />
              </ThirdImageCover>
            </ThirdImageContainer>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default SelectedBlogScreen;
const ScreenWidth = Dimensions.get("window").width;

//box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);  border-radius: 40px;
const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 22px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const TitleOfPageContainer = styled.View`
  width: ${ScreenWidth - 40};
  margin-top: 48px;
  margin-left: 20px;
`;

const TitleOfPage = styled.Text`
  font-size: 26px;
  font-weight: 500;
  color: #1d1d26;
`;

const HashtagContainer = styled.View`
  width: ${ScreenWidth - 40};
  margin-left: 20px;
  margin-top: 3px;
  padding-bottom: 0px;
`;
//F39C12, 1d1d26
const HashtagForBlogPost = styled.Text`
  font-size: 12px;
  font-weight: 100;
  text-transform: lowercase;
  color: #7054e2;
`;

const FirstImageContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
  height: ${ScreenWidth - 60};
`;

const FirstImageCover = styled.View`
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

const WriteUpContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
`;
const WriteUpForBlogPost = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: #1d1d26;
`;

const SecondImageContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
  height: ${ScreenWidth - 60};
`;

const SecondImageCover = styled.View`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

const SecondImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ThirdImageContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
  height: ${ScreenWidth - 60};
`;

const ThirdImageCover = styled.View`
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

const ThirdImage = styled.Image`
  width: 100%;
  height: 100%;
`;
