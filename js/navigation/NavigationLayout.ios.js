import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';
import {
  Text,
  Image,
  Linking
} from 'react-native';
import { styles } from './styles';
import { typography, colors } from '../config/styles';
import Router from './routes';
import { popModal } from '../redux/modules/moreModal';


const defaultRouteConfig = {
  navigationBar: {
    tintColor: colors.white,
    tintBackground: colors.black,
    titleStyle: {
      fontFamily: typography.titleHeading,
      fontSize: typography.norwester18,
      height: 40,
    },
    height: 35,
    backgroundColor: colors.darkGrey
  }
}
class NavigationLayout extends Component {

  openEmail() {
    Linking.openURL('mailto:contact@soapboxspeakers.com')
      .catch(err => console.error('An error occurred', err))
  }

  render() {
    return (
      <TabNavigation
        id="tabMain"
        initialTab="home"
        tabBarColor="#353434"
      >
        <TabItem
          id="home"
          title="home"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/home_icon.png')} style={styles.navIconIos} />}
        >
          <StackNavigation
            id="home"
            navigatorUID="home"
            initialRoute={Router.getRoute('home')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="events"
          title="events"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/events_icon.png')} style={styles.navIconIos} />}
        >
          <StackNavigation
            id="events"
            navigatorUID="events"
            initialRoute={Router.getRoute('events')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="newTalk"
          title="new talk"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/newtalk_icon.png')} style={styles.navIconIos} />}
          onPress={() => this.props.dispatch(popModal(!this.props.modal))}
        >
          <StackNavigation
            id="newTalk"
            navigatorUID="newTalk"
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="dashboard"
          title="dashboard"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/dashboard_icon.png')} style={styles.navIconIos} />}
        >
          <StackNavigation
            id="dashboard"
            navigatorUID="dashboard"
            initialRoute={Router.getRoute('dashboard')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="more"
          title="more"
          renderTitle={this.renderTitle}
          renderIcon={() => <Image source={require('../assets/icons/more_icon.png')} style={styles.navIconIos} />}
          //TODO: create redux state to manage conditional rendering of tabnav menu popup
          onPress={() => this.props.dispatch(popModal(!this.props.isModalVisible))}
          >
        </TabItem>
      </TabNavigation>
    );
  }

  renderTitle(isSelected, title) {
    const titleStyle = {
      color: isSelected ? colors.lightGrey : colors.lightGrey,
      fontSize: 10,
      fontFamily: typography.fontMainRegular
    }
    return (
      <Text style={titleStyle}>{title}</Text>
    )
  }

}

const mapStateToProps = (state) => ({
  isModalVisible: state.modal.isModalVisible
})

export default connect(mapStateToProps)(NavigationLayout);