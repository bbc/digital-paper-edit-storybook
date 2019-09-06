// import ApiWrapper from './ApiWrapper';
import DemoApiWrapper from './DemoAPIWrapper/index.js';
import whichJsEnv from '../which-js-env';

const jsENV = whichJsEnv();

export default ( () => {

  if (jsENV === 'demo') {
    console.log('API Wrapper demo time!');
    const demoApiWrapper = new DemoApiWrapper();
    Object.freeze(demoApiWrapper);

    return demoApiWrapper;
  }
  if (jsENV === 'browser') {
    // const apiWrapper = new ApiWrapper();
    // Object.freeze(apiWrapper);

    // return apiWrapper;
    console.log('nope');
  }
  if (jsENV === 'electron') {
    const ElectronWrapper = window.ElectronWrapper;
    const electronWrapper = new ElectronWrapper();
    Object.freeze(electronWrapper);

    return electronWrapper;
  }
})();