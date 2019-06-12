const React = require("react");
const { ViewPropTypes } = (ReactNative = require("react-native"));
const PropTypes = require("prop-types");
const createReactClass = require("create-react-class");
const { StyleSheet, Dimensions, Text, View, Animated } = ReactNative;
const Button = require("./Button");

const CustomTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style
  },

  getDefaultProps() {
    return {
      activeTextColor: "#1D1D26",
      inactiveTextColor: "#9E9E9E",
      backgroundColor: null
    };
  },

  renderTabOption(name, page) {},

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? "bold" : "normal";
    const fontSize = isTabActive ? 14 : 14;

    return (
      <Button
        style={{ flex: 1 }}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits="button"
        onPress={() => onPressHandler(page)}
      >
        <View style={[styles.tab, this.props.tabStyle]}>
          <Text style={[{ color: textColor, fontWeight, fontSize }, textStyle]}>
            {name}
          </Text>
        </View>
      </Button>
    );
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const screenWidth = Dimensions.get("window").width;
    const widthAndshit = Dimensions.get("window").width - 40;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: "absolute",
      width: containerWidth / numberOfTabs - 20,
      //width: screenWidth / numberOfTabs - 150,
      height: 0,
      backgroundColor: "#1D1D26",
      bottom: 0
    };

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, widthAndshit / numberOfTabs]
      //outputRange: [0, containerWidth / numberOfTabs - 40]
    });
    return (
      <View
        style={[
          styles.tabs,
          { backgroundColor: this.props.backgroundColor },
          this.props.style
        ]}
      >
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            {
              transform: [{ translateX }]
            },
            this.props.underlineStyle
          ]}
        />
      </View>
    );
  }
});

const containerWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    paddingBottom: 10
  },
  tabs: {
    height: 35,
    width: containerWidth - 40,
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 0.4,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginLeft: 20,
    borderColor: "#9E9E9E"
  }
});

module.exports = CustomTabBar;
