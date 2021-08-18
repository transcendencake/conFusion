import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePlusIcon } from './google-plus-icon.component';
import { EnvelopeIcon } from './envelope-icon.component';
import { FacebookIcon } from './facebook-icon.component';
import { LinkedinIcon } from './linkedin-icon.component';
import { TwitterIcon } from './twitter-icon.component';
import { YoutubeIcon } from './youtube-icon.component';



@NgModule({
  declarations: [
    GooglePlusIcon,
    EnvelopeIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon
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
    YoutubeIcon
  ]
})
export class IconsModule { }
