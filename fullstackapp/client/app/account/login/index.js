'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('fullstackappApp.login', [])
  .controller('LoginController', LoginController)
  .name;
