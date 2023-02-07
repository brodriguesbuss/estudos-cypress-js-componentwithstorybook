import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import LoginForm from './LoginForm';



export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'LoginForm',
  
  component: LoginForm
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Filled = Template.bind({});
Filled.play = async ({ canvasElement }) => {
const canvas = within(canvasElement);  
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
}


  //Caso queira mapear o click()
  // const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  // await userEvent.click(loginButton);




