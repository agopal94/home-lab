import { Component } from '@angular/core';
import { Service } from '../interfaces/common-interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public servicesList: Service[] = [
    {
      id: 'radarr',
      label: 'Radarr',
      shortDesc: 'Movie Management',
      desc: 'Radarr is a movie collection manager for Usenet and BitTorrent users.'
    },
    {
      id: 'sonarr',
      label: 'Sonarr',
      shortDesc: 'TV Show Management',
      desc: 'Sonarr is an internet PVR for Usenet and Torrents.'
    },
    {
      id: 'bazarr',
      label: 'Bazarr',
      shortDesc: 'Subtitle Management',
      desc: 'Bazarr is a companion application to Sonarr and Radarr that manages and downloads subtitles based on your requirements.'
    },
    {
      id: 'transmission',
      label: 'Transmission',
      shortDesc: 'Torrent Management',
      desc: 'Transmission is a BitTorrent client which features a variety of user interfaces on top of a cross-platform back-end.'
    }
  ];

  constructor() {}

}
