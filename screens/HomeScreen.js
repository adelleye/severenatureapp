import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button
} from "react-native";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { Icon } from "expo";
import { connect } from "react-redux";
import LatestCollection from "../components/LatestCollection";
import LatestBlogPostsCard from "../components/LatestBlogPostsCard";

function mapStateToProps(state) {
  return { action: state.action };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        {/* 
        1. ^ we use static navigationOptions to remove the  navigation bar's header.
        2. We use SafeAreaView so we don't scroll under the date 
       */}
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <Title>Home</Title>
            </TitleBar>

            {/* We use TouuchableOpacity to make things clickable */}
            {CurrentCollection.map((post, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.props.navigation.push("Campaign");
                }}
              >
                <LatestCollection
                  collectionimage={post.collectionimage}
                  currenttitle={post.currenttitle}
                  collectionsname={post.collectionsname}
                />
              </TouchableOpacity>
            ))}

            <SubtitleAndButtonContainer>
              <Subtitle>Latest blog posts</Subtitle>
            </SubtitleAndButtonContainer>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {/* In order to loop, we need to reference the BlogPosts array that we created earlier. 
              We use the map() function to loop through all of that data.
              Then we create 2 values "blog" - for returning each item & "index" - to retrieve the position
              */}
              {Posts.map((blog, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    this.props.navigation.push("SelectedBlog", {
                      section: blog
                    });
                  }}
                >
                  <LatestBlogPostsCard
                    blogsTitle={blog.blogsTitle}
                    firstImage={blog.firstImage}
                    blogHashtag={blog.blogHashtag}
                    blogWriteUp={blog.blogWriteUp}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen);

const Container = styled.View`
  background: white;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 45px;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 34px;
  font-weight: 700;
  color: #1d1d26;
`;

//Blog Styling Begins
const SubtitleAndButtonContainer = styled.View`
  width: 100%;
  margin-top: 30px;
  margin-left: 20px;
`;
const Subtitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #1d1d26;
`;

//Array for latest collection
const CurrentCollection = [
  {
    collectionimage: require("../assets/arcadialook.jpg"),
    currenttitle: "View latest collection titled:",
    collectionsname: "'Arcadia'"
  }
];

//Array for BlogPosts
const Posts = [
  {
    firstImage: require("../assets/Derin1.jpg"),
    blogHashtag: "#listeningparty #brampton",
    blogsTitle: "Listening: Derin Falana",
    blogWriteUp:
      "This week we hosted Brampton native Derin Falana at the Only One gallery in 4 Brock and he performed hit songs like YKWIA, The Low Down in a 3 hour set. Afterwards there was a pop up and after party at Rebel. Around the World & Back is a P+F tour that featured two stops in Canada both created in collaboration with Saintwoods & CNTRBND to uniquely combine all the mediums of the brand Photos by Tobi",
    secondImage: require("../assets/Derin2.jpg"),
    thirdImage: require("../assets/Derin3.jpg")
  },

  {
    firstImage: require("../assets/Arcadia.jpg"),
    blogHashtag: "#popup #lagos",
    blogsTitle: "Arcadia Workshop",
    blogWriteUp:
      "Street-wear label Severe Nature will be hosting an audio-visual presentation; which will be pop-up + workshop on the December 28th and 29th titled “Arcadia”. This two day activation will also feature various outstanding artists alongside Grey93 Sergiopeperamos , Streetwear brands such as Home Delivery as well as an ultra-modern printing house Garmprint.",
    secondImage: require("../assets/Arcadia2.jpg"),
    thirdImage: require("../assets/Arcadia3.jpg")
  },
  {
    firstImage: require("../assets/arcadialook.jpg"),
    blogHashtag: "#lookbook #nigeria #2018",
    blogsTitle: "Arcadia Fall 2018 Lookbook",
    blogWriteUp:
      "Street-wear label Severe Nature will be hosting an audio-visual presentation; which will be pop-up + workshop on the December 28th and 29th titled “Arcadia”. This two day activation will also feature various outstanding artists alongside Grey93 Sergiopeperamos , Streetwear brands such as Home Delivery as well as an ultra-modern printing house Garmprint. View fulllook book in campaign page",
    secondImage: require("../assets/arcadialook2.jpg"),
    thirdImage: require("../assets/arcadialook4.jpg")
  }
];
