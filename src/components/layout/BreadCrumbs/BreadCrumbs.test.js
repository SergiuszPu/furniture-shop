import React from 'react';
import { shallow } from 'enzyme';
import BreadCrumbs from './BreadCrumbs';

describe('ShopBanner', () => {
  it('renders without crashing', () => {
    shallow(<BreadCrumbs />);
  });
});
