# @cascade/fontawesome

[![Build Status](https://travis-ci.org/sjohnsonaz/cascade-fontawesome.svg?branch=master)](https://travis-ci.org/sjohnsonaz/cascade-fontawesome) [![npm version](https://badge.fury.io/js/%40cascade%2Ffontawesome.svg)](https://badge.fury.io/js/%40cascade%2Ffontawesome)

Font Awesome integration for Cascade

## Import Font Awesome

```` TypeScript
import * as fontawesome from '@fortawesome/fontawesome';
import * as faUser from '@fortawesome/fontawesome-free-solid/faUser';
import * as faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown';
````

## Add Icons to Font Awesome Library

```` TypeScript
fontawesome.library.add(faUser);
fontawesome.library.add(faArrowDown);
````

## Use Icon Component

```` TypeScript
import { Icon } from '@cascade/fontawesome';

let element = <Icon prefix="fas" iconName="user">
````