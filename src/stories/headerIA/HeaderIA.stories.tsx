import React from 'react';
import { ComponentMeta, ComponentStory, storiesOf } from '@storybook/react';
import Button from '../buttonIA/ButtonIA';
import HeaderIA from './HeaderIA';

export default {
    title: 'HeaderIA',
    component: HeaderIA,
    parameters: {
      // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof HeaderIA>;
  
const Template: ComponentStory<typeof HeaderIA> = (args) => <HeaderIA{...args} />;

export const LoggedIn = Template.bind({}); 
LoggedIn.args = {
    title: 'Jane Doe',
    buttonLabel:'batata doce'
};


