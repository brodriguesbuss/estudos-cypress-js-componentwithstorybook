import { ComponentMeta, ComponentStory } from "@storybook/react";
import Welcome from "./Welcome";

export default{
    title: 'Welcome',
    component: Welcome,

} as ComponentMeta<typeof Welcome>

const Template: ComponentStory<typeof Welcome> = (args) => <Welcome {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    username: "Test User"
   
  };