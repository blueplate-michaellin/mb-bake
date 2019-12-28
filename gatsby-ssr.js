const React = require('react');
const {StateProvider} = require('./src/utils/store.js');

exports.wrapPageElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>;
};