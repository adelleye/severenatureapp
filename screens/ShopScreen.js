import React from "React";
import styled from "styled-components";
import {
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view-universal";
import CustomTabBar from "../TabBar/CustomTabBar";

class ShopScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <ScrollView>
          <TitleOfPageBar>
            <TitleOfPage>Shop</TitleOfPage>
          </TitleOfPageBar>
          <ScrollableTabView
            style={{ marginTop: 20 }}
            renderTabBar={() => <CustomTabBar />}
          >
            {/* Second Tab page starts */}
            <FirstPage tabLabel="View all">
              <FirstPageContainer>
                <TitleOfPage>This is the first page</TitleOfPage>
              </FirstPageContainer>
            </FirstPage>

            {/* Second Tab page starts */}
            <SecondPage tabLabel="Tops">
              <SecondPageContainer>
                <TitleOfPage>This is the second page</TitleOfPage>
              </SecondPageContainer>
            </SecondPage>

            {/* Second Tab page starts */}
            <ThirdPage tabLabel="Fleece">
              <ThirdPageContainer>
                <TitleOfPage>This is the third page</TitleOfPage>
              </ThirdPageContainer>
            </ThirdPage>

            {/* Second Tab page starts */}
            <FourthPage tabLabel="Accessories">
              <FourthPageContainer>
                <TitleOfPage>This is the fourth page</TitleOfPage>
              </FourthPageContainer>
            </FourthPage>
            {/* Second Tab page ends */}
          </ScrollableTabView>
        </ScrollView>
      </Container>
    );
  }
}

export default ShopScreen;

const ScreenWidth = Dimensions.get("window").width;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const TitleOfPageBar = styled.View`
  width: 100%;
  margin-top: 90px;
  margin-left: 20px;
`;

const TitleOfPage = styled.Text`
  font-size: 34px;
  font-weight: 700;
  color: #1d1d26;
`;

const FirstPage = styled.View`
  flex: 1;
  background-color: white;
`;

const FirstPageContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
`;
const SecondPage = styled.View`
  flex: 1;
  background-color: white;
`;

const SecondPageContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
`;
const ThirdPage = styled.View`
  flex: 1;
  background-color: white;
`;

const ThirdPageContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
`;
const FourthPage = styled.View`
  flex: 1;
  background-color: white;
`;

const FourthPageContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
`;
