import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Buttontwo from './Buttontwo';


export default {
  title: 'Buttontwo',
  component: Buttontwo,

} as ComponentMeta<typeof Buttontwo>;

const Template: ComponentStory<typeof Buttontwo> = (args) => <Buttontwo {...args} />;

export const Novo = Template.bind({}); 
Novo.args = {
  className:'hover:border-gray-700 hover:bg-cy-blue',
  children:'Button'  
};



