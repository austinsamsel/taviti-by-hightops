import { Component } from '@angular/core';

import { Data } from './data';

const DATA: Data = {
  name: 'Taviti',
  homeURL: 'https://taviti.com/',
  logoImgURL: 'https://taviti.com/lib/images/taviti_logo_blue.png',
  classTitle: 'All-Levels Yoga Flow',
  classHeroImg: 'https://taviti.com/api/get/user/c0e985af8d43fcf8762a07add64f19ba/image/background',
  classTeacherImg: 'https://taviti.com/api/get/user/c0e985af8d43fcf8762a07add64f19ba/image/profile',
  classTeacherNameFirst: 'Cindy',
  classTeacherNameLast: 'Raspiller',
  classLocationName: 'Title Nine',
  classAddress: '208 Hamilton Ave, Palo Alto, CA 94301, USA',
  classDate: 'Dec 20, 2016',
  classTime: '8:15pm (1h15m)',
  classDescription1: 'I will guide you through a dynamic 75 minute vinyasa sequence. After a gentle warm up we will build strength, flexibility and balance while some sweet jams play in the background. Class will conclude with a relaxing savasana. This class is suitable for yogis of all levels, as modifications and opportunities for more advanced poses will be offered.',
  classDescription2: 'Make sure to bring a mat, water bottle, towel, and any of your preferred props.',
  teacherAbout1: 'When I first began my yoga practice, I couldn\'t touch my toes. I rolled my eyes at suggestions to "maybe take a bind." I could not hold downward dog for 5 breaths. I was not graceful. What I\'m saying is, if that\'s where you are, then I feel you.',
  teacherAbout2: 'It took me a few years to find my yoga groove. I finally fell in love with the creative potential in vinyasa flows, and once I started seeing progress I craved more. I completed my 200 hour teacher training through Yoga Belly in May 2016, under the guidance of Courtney Ronca and Will Cristobal.',
  teacherAbout3: 'I strive to build an environment for my students that allows them to find joy in yoga. I like to build challenging yet accessible classes that allow students to move their bodies in new and interesting ways. By combining creative movement, breath work, and a meditative cool down, I hope to leave students feeling strong and flexible in both body and mind.',
  classPrice: '10.00',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Taviti';
  data = DATA;
}
