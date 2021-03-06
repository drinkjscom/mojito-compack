import React from 'react';
import Chart from './index'

const conf = require("./declare.json")

export default {
  title: 'Echarts/指数回归',
  component: Chart,
};

const Template = (args) => <Chart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  styles:{
    width:"500px",
    height:"300px"
  },
  data: conf.props.data.default,
};