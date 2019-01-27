import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { updateObject } from '../../shared/utility';
import classes from './SideDrawer.module.scss';
import DrawerSection from './DrawerSection/DrawerSection';

class SideDrawer extends Component{

    state = {
        activeSection: null,
        drawerOpened: false,
    }

    data = {
        toggleSideDrawerButton: React.createRef(),
        activeSideClasses: classes.SideDrawer
    }

    componentWillMount() {
        let counter = 0;

        if (this.props.links)
            for (let title in this.props.links) {
                const sectionTopics = Object.values(this.props.links[title]);
                if ( sectionTopics.find( (val) => window.location.pathname.includes(val)) )
                    this.setState(updateObject( this.state , {activeSection: "sidebarSection" + counter} ));
                counter++;
            }
    }

    toggleSectionHandler = (el, activeClass ) => {
        el.target.closest('button').classList.toggle(activeClass);
        this.setState(updateObject( this.state , {activeSection: el.target.id} ));
    }

    toggleDrawerHandler = () => {
        const drawerToggleButton = this.data.toggleSideDrawerButton.current;

        if ( !drawerToggleButton.className.includes('active') )
            this.data.activeSideClasses = [ classes.SideDrawer, classes.show ].join(' ');
        else
            this.data.activeSideClasses = classes.SideDrawer;

        drawerToggleButton.classList.toggle(classes.active);
        this.setState(updateObject( this.state , { drawerOpened: !this.state.drawerOpened } ));
    }

    onNavigateHandler = () => {
        this.data.activeSideClasses = classes.SideDrawer;
        if (this.data.toggleSideDrawerButton.current)
            this.data.toggleSideDrawerButton.current.classList.remove(classes.active);
        this.setState(updateObject(this.state, {drawerOpened: false}));
    }

    render() {
        const sections = [];

        if ( this.props.links && this.props.links.value )
            delete this.props.links.value;

        for( let title in this.props.links ){

            let isActive = (this.state.activeSection === "sidebarSection" + sections.length);
            let currUrl = isActive ? window.location.pathname + window.location.hash : "";
            let currTopic = isActive ? this.props.currTopic : "";

            sections.push(
                <DrawerSection
                id={"sidebarSection" + sections.length}
                key={title}
                title={title}
                isActive={isActive}
                url={currUrl}
                currTopic={currTopic}
                ordered={ this.props.links[title].ordered }
                items={this.props.links[title]}
                subpage={this.props.subpage}
                onNavigateHandler={this.onNavigateHandler}
                toggleSectionHandler={this.toggleSectionHandler}/>
            );
        }

        return (
            <>
                <div className={classes.DrawerButton} onClick={this.toggleDrawerHandler} ref={ this.data.toggleSideDrawerButton }>
                    <FontAwesomeIcon icon="angle-up" />
                    <FontAwesomeIcon icon="angle-down" />
                </div>
                <div className={ this.data.activeSideClasses }>
                    { sections }
                </div>
            </>
        );
    }
}

export default SideDrawer;