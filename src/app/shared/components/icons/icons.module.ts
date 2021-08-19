import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePlusIcon } from './implementations/google-plus-icon.component';
import { EnvelopeIcon } from './implementations/envelope-icon.component';
import { FacebookIcon } from './implementations/facebook-icon.component';
import { LinkedinIcon } from './implementations/linkedin-icon.component';
import { TwitterIcon } from './implementations/twitter-icon.component';
import { YoutubeIcon } from './implementations/youtube-icon.component';
import { AddressCardIcon } from './implementations/address-card-icon.component';
import { HomeIcon } from './implementations/home-icon.component';
import { InfoIcon } from './implementations/info-icon.component';
import { ListIcon } from './implementations/list-icon.component';
import { FaxIcon } from './implementations/fax-icon.component';
import { PhoneIcon } from './implementations/phone-icon.component';
import { SkypeIcon } from './implementations/skype-icon.component';

const sharedComponents = [
  GooglePlusIcon,
  EnvelopeIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  AddressCardIcon,
  HomeIcon,
  InfoIcon,
  ListIcon,
  FaxIcon,
  PhoneIcon,
  SkypeIcon
];

@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule
  ],
  exports: sharedComponents
})
export class IconsModule { }
