import React from "React";
import styled from "styled-components";
import {
  ScrollView,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  RefreshControl
} from "react-native";
import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view-universal";
import CustomTabBar from "../TabBar/CustomTabBar";
import BlogPosts from "../components/BlogPosts";
import LatestCollection from "../components/LatestCollection";

class DiscoverScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    () => {
      this.setState({ refreshing: false });
    };
  };

  render() {
    return (
      <Container>
        <TitleOfPageBar>
          <TitleOfPage>Discover</TitleOfPage>
        </TitleOfPageBar>
        {/* 
        1. ^ Custom SegmentedView = ScrollableTabView.
        2. 
       */}
        <ScrollableTabView
          style={{ marginTop: 20 }}
          renderTabBar={() => <CustomTabBar />}
        >
          <FirstPage tabLabel="Blog">
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }
            >
              {/* First Tab page starts */}
              <FirstPageContainer>
                {Posts.map((blog, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("SelectedBlog", {
                        section: blog
                      });
                    }}
                  >
                    <BlogPosts
                      firstImage={blog.firstImage}
                      blogHashtag={blog.blogHashtag}
                      blogsTitle={blog.blogsTitle}
                      blogWriteUp={blog.blogWriteUp}
                    />
                  </TouchableOpacity>
                ))}
              </FirstPageContainer>

              {/* We use TouchableOpacity to make things clickable 
              {CurrentCollection.map((post, index) => (
                <TouchableOpacity key={index}>
                  <LatestCollection
                    collectionimage={post.collectionimage}
                    currenttitle={post.currenttitle}
                    collectionsname={post.collectionsname}
                  />
                </TouchableOpacity>
              ))}*/}
            </ScrollView>
          </FirstPage>

          {/* Second Tab page starts */}
          <SecondPage tabLabel="Podcast">
            <SecondPageContainer>
              <TitleOfPage>This is the second page</TitleOfPage>
            </SecondPageContainer>
          </SecondPage>
          {/* Second Tab page ends */}
        </ScrollableTabView>
      </Container>
    );
  }
}

export default DiscoverScreen;

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

const Posts = [
  {
    firstImage: require("../assets/Derin1.jpg"),
    blogHashtag: "#listeningparty #brampton",
    blogsTitle: "Listening: Derin Falana",
    blogWriteUp:
      "This week we hosted Brampton native Derin Falana at the Only One gallery in 5 Brock and he performed hit songs like YKWIA, The Low Down in a 3 hour set. Afterwards there was a pop up and after party at Rebel.  Around the World & Back is a P+F tour that featured two stops in Canada both created in collaboration with Saintwoods & CNTRBND to uniquely combine all the mediums of the brand  Photos by Tobi",
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
      "Streetwear label Severe Nature will be hosting an audio-visual presentation; which will be pop-up + workshop on the December 28th and 29th titled “Arcadia”. This two day activation will also feature various outstanding artists alongside Grey93 Sergiopeperamos , Streetwear brands such as Home Delivery as well as an ultra-modern printing house Garmprint. View fulllook book in campaign page",
    secondImage: require("../assets/arcadialook2.jpg"),
    thirdImage: require("../assets/arcadialook4.jpg")
  }
];

//Array for latest collection
const CurrentCollection = [
  {
    collectionimage: require("../assets/arcadialook.jpg"),
    currenttitle: "View latest collection titled:",
    collectionsname: "'Arcadia'"
  }
];

const SecondPage = styled.View`
  flex: 1;
  background-color: white;
`;

const SecondPageContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  width: ${ScreenWidth - 40};
`;

/* Tasks
blogHashTag={blog.blogHashtag}

 



 
    
    blogHashtag: "#listeningparty #brampton",
    
   
    thirdImage: require("../assets/Arcadia.jpg")
*/
