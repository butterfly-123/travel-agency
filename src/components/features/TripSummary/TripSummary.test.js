import React from 'react';
import { shallow }  from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct link', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} />);
    const renderedLink = component.find('.link').prop('to');

    expect(renderedLink).toEqual(`/trip/${id}`);

    // console.log(component.debug());
  });

  it('should render correct src and alt for image', () => {
    const expectedAlt = 'Lorem ipsum';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);

    expect(component.find('.img').prop('src').toEqual(expectedSrc)); 
    expect(component.find('.img').prop('alt').toEqual(expectedAlt)); 

  });

  it('should render correct props name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = '5';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags and spans', () => {
    const tags = ['test1', 'test2', 'test3'];
    const component = shallow(<TripSummary tags={tags} />);

    expect(component.find('.tags span').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(tags[2]);
  });

  it('should render tags if array isnt empty', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags')).toEqual({});
    console.log(component.debug());
  });
});