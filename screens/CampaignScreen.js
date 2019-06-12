import React from "React";
import styled from "styled-components";
import {
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from "react-native";
import CampaignImages from "../components/CampaignImages";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class CampaignScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleOfPageContainer>
              <TitleOfPage>Campaign</TitleOfPage>
            </TitleOfPageContainer>

            <CollectionNameContainer>
              <CollectionName>
                ‘Arcadia’ - Fall/Winter 2019 collection{" "}
              </CollectionName>
            </CollectionNameContainer>

            <CollectionWriteUpContainer>
              <CollectionWriteUp>
                Inspired by the Prehistoric Ages and the fossilization of the
                youth’s hidden treasures, The collection features embroidered
                long sleeve mock necks, sleek button-up shirts, pin striped
                coats, and camel wool jackets incorporating earth tone colour
                palettes and its signature patches for expression.
              </CollectionWriteUp>
            </CollectionWriteUpContainer>

            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {LookbookImages.map((post, index) => (
                <CampaignImages key={index} image={post.image} />
              ))}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default CampaignScreen;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const TitleOfPageContainer = styled.View`
  width: 100%;
  margin-top: 45px;
  margin-left: 20px;
`;

const TitleOfPage = styled.Text`
  font-size: 34px;
  font-weight: 700;
  color: #1d1d26;
`;

const CollectionNameContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-left: 20px;
`;
const CollectionName = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #1d1d26;
`;

const CollectionWriteUpContainer = styled.View`
  width: ${screenWidth - 40};
  margin-top: 10px;
  margin-left: 20px;
`;

const CollectionWriteUp = styled.Text`
  font-size: 13px;
  font-weight: 400;
  color: #1d1d26;
`;

const LookbookImages = [
  {
    image: require("../assets/arcadialook.jpg")
  },

  {
    image: require("../assets/arcadialook2.jpg")
  },
  {
    image: require("../assets/arcadialook3.jpg")
  },
  {
    image: require("../assets/arcadialook4.jpg")
  }
];
