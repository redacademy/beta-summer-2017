import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet,
    Image,
    Linking
} from 'react-native';
import {
    DrawerNavigation,
    DrawerNavigationItem,
    StackNavigation
} from '@expo/ex-navigation';

import Router from './routes';
import { colors, typography } from '../config/styles';
import { styles } from './styles';

class NavigationLayout extends Component {

    renderTitle(title, isSelected) {
        const titleStyle = {
            color: isSelected ? colors.lightGrey : colors.lightestGrey,
            fontSize: 10,
            fontFamily: typography.fontMainRegular,
        };
        return <Text style={titleStyle}>{title}</Text>;
    }

    render() {
        return (
            <DrawerNavigation
                id="main"
                navigatorUID="main"
                initialItem="home"
                drawerWidth={225}
            >
                <DrawerNavigationItem
                    id="home"
                    title="home"
                    renderIcon={() => <Image source={require('../assets/icons/home_icon.png')} style={styles.navIconIos} />}
                    renderTitle={this.renderTitle}
                >
                    <StackNavigation
                        id="home"
                        navigatorUID="home"
                        initialRoute={Router.getRoute('home')}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id="events"
                    title="events"
                    renderIcon={() => <Image source={require('../assets/icons/events_icon.png')} style={styles.navIconIos} />}
                    renderTitle={this.renderTitle}
                >
                    <StackNavigation
                        id="events"
                        navigatorUID="events"
                        initialRoute={Router.getRoute('events')}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id="newTalk"
                    title="new talk"
                    renderIcon={() => <Image source={require('../assets/icons/newtalk_icon.png')} style={styles.navIconIos} />}
                    renderTitle={this.renderTitle}
                    onPress={() => Linking.openURL("mailto:?to=contact@soapboxspeakers.com").catch(err => console.error('An error occurred', err))}
                />

                <DrawerNavigationItem
                    id="dashboard"
                    title="dashboard"
                    renderIcon={() => <Image source={require('../assets/icons/dashboard_icon.png')} style={styles.navIconIos} />}
                    renderTitle={this.renderTitle}
                >
                    <StackNavigation
                        id="dashboard"
                        navigatorUID="dashboard"
                        initialRoute={Router.getRoute('dashboard')}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id="menu"
                    title="menu"
                    renderIcon={() => <Image source={require('../assets/icons/more_icon.png')} style={styles.navIconIos} />}
                    renderTitle={this.renderTitle}
                    //TODO: create redux state to manage conditional rendering of tabnav menu popup
                    onPress={() => console.log('trigger popup render')}    
                />

            </DrawerNavigation>
        );
    }
}

export default NavigationLayout;