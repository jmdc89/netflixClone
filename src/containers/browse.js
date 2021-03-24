import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import { Card, Header, Loading, Player } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FirebaseContext } from '../context/firebase';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

export function BrowseContainer({slides}) {
    
}