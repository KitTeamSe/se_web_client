import React from 'react';
import Login from './Login';
export default {
  component: Login,
  title: 'templates/Login'
};
const Template = args => < Login {...args} />;
export const Default = Template.bind({});
Default.args = {

};