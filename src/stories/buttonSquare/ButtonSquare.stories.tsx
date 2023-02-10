import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonSquare from './ButtonSquare';


export default {
  title: 'ButtonSquare',
  component: ButtonSquare,

} as ComponentMeta<typeof ButtonSquare>;

const Template: ComponentStory<typeof ButtonSquare> = (args) => <ButtonSquare {...args} />;

export const Primary = Template.bind({}); 
Primary.args = {
  children:'Button' ,  
  backgroundColor: 'blue',
  className: 'bg-cy-blue text-white'
 
};

export const Secondary = Template.bind({}); 
Secondary.args = {
  children:'Button',
  backgroundColor: 'pink',
  className: 'text-black'
};



