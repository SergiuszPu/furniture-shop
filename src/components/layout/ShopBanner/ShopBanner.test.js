import React from 'react';
import { shallow } from 'enzyme';
import ShopBanner from './ShopBanner';

describe('ShopBanner', () => {
  it('renders without crashing', () => {
    shallow(<ShopBanner />);
  });
});
