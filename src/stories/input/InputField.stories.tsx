import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputField } from './InputField';
import { isBlock } from 'typescript';


export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Input',
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  name: 'User Naminho',
  label: 'Name',
  requiredMessage: 'Name is required',
  submitted: false,

};

export const Empty = Template.bind({});
Empty.args = {
  label: 'Name',
  requiredMessage: 'Name is required',
  submitted: true,
};