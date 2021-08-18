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



@NgModule({
  declarations: [
    GooglePlusIcon,
    EnvelopeIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
    AddressCardIcon,
    HomeIcon,
    InfoIcon,
    ListIcon
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GooglePlusIcon,
    EnvelopeIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
    AddressCardIcon,
    HomeIcon,
    InfoIcon,
    ListIcon
  ]
})
export class IconsModule { }
