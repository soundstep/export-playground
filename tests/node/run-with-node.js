#!/usr/bin/env node

// level 0
const lib = require('export-playground');
console.log('-- 0', lib);

// level 1
const { info } = require('export-playground');
info();

// level 2
const { login, logout } = require('export-playground/auth');
login();
logout();

// level 3
const { commercial, sponsorship } = require('export-playground/deep/ads');
commercial();
sponsorship();
