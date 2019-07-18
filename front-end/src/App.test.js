import React from 'react';
import { shallow } from 'enzyme';
import About from './components/about';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let wrapper;


beforeEach(() => {
  wrapper = shallow(<About/>)
});


describe('About component', () => {
    it('about component should one div', () => {
        expect(wrapper.find("div")).toHaveLength(9);
    });

    it('about component should one fragment', () => {
        expect(wrapper.find("Fragment")).toHaveLength(1);
    });
});