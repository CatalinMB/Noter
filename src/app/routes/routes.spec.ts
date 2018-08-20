const deepFreeze = require('deep-freeze');
import { routerReducer, UPDATE_LOCATION } from '@angular-redux/router';


describe('routes', () => {


  it('should not modify the url', () => {

    const routed = {
      nextState: routerReducer(undefined, { type: UPDATE_LOCATION, payload: '/home' })
    };

    try {
      deepFreeze(routed);
      routed.nextState = routerReducer(undefined, { type: UPDATE_LOCATION, payload: '/asdfghjlk' });
    } catch (ERR) {
      expect(routed.nextState).toEqual('/home');

    }
  });

  it('should modify the url', () => {

    const routed = {
      nextState: routerReducer(undefined, { type: UPDATE_LOCATION, payload: '/home' })
    };
      routed.nextState = routerReducer(undefined, { type: UPDATE_LOCATION, payload: '/asdfghjlk' });
      expect(routed.nextState).toEqual('/asdfghjlk');

  });
});
