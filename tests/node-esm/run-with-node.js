#!/usr/bin/env node

// level 0
import lib from 'export-playground';
import { info } from 'export-playground';
import { login, logout } from 'export-playground/auth';
import { commercial, sponsorship } from 'export-playground/deep/ads';

console.log('-- 0', lib);

// level 1
info();

// level 2
login();
logout();

// level 3
commercial();
sponsorship();
