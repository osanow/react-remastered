import React from 'react';
import { shallow, mount } from 'enzyme';

import classes from './SideDrawer.module.scss';
import SideDrawer from './SideDrawer';
import DrawerSection from  './DrawerSection/DrawerSection';

describe('<SideDrawer />', () => {

    const props = {
        links: {
            test: {
                test: 'test.html',
            }
        }
    }

    it('should render any <DrawerSection /> when links is defined', () => {
        const wrapper = shallow(<SideDrawer />);
        expect(wrapper.containsMatchingElement(<DrawerSection />)).toEqual(false);
        wrapper.setProps({ ...props });
        expect(wrapper.containsMatchingElement(<DrawerSection />)).toEqual(true);
    });

    it('should close drawer in mobile mode after choose section', () => {
        const wrapper = shallow(<SideDrawer />);
        wrapper.instance().onNavigateHandler();
        expect(wrapper.state('drawerOpened')).toEqual(false);
    });

    it('should toggle drawer in mobile mode after click on button', () => {
        const wrapper = mount(<SideDrawer />);
        wrapper.find(`div[className~="${classes.DrawerButton}"]`).simulate('click');
        expect(wrapper.state('drawerOpened')).toEqual(true);
        expect(wrapper.exists(`div[className~="${classes.show}"]`)).toEqual(true);
        wrapper.unmount();
    });

});