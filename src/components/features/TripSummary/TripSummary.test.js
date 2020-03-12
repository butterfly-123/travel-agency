import React from 'react';
import { shallow }  from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should rendered link to the correct address', () => {
    const component = shallow(<TripSummary 
      id={'abc'} 
      tags={[]}  
      image={'imgSrc'}
      altSrc={'imgName'}
    />);

    //czy <img> ma poprawne src i alt,
    expect(component.contains(<img src={'imgSrc'} alt={'imgName'} />)).toBeTruthy();
  });
});