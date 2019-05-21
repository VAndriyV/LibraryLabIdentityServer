/* eslint-disable @typescript-eslint/camelcase */
import { createUserManager } from 'redux-oidc';
import { UserManagerSettings } from 'oidc-client';

const userManagerConfig: UserManagerSettings = {
  client_id: 'spa',
  redirect_uri: 'http://localhost:5100/#/callback',
  response_type: 'token id_token',
  scope:"openid profile email api.read",
  authority: 'http://localhost:54990/',
  silent_redirect_uri: 'http://localhost:5100/silentRenew.html',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true
};

const userManager = createUserManager(userManagerConfig);

export default userManager;