import bytb10 from '../../Static/project-media/bytb10-video.mp4';
import rickAndMorty from '../../Static/project-media/rick-and-morty-video.mp4';
import lonliestChatroom from '../../Static/project-media/lonliest-chatroom-video.mp4';

export const ProjectData = [
  {
    name: 'Beyond the Big 10',
    madeWith: ['React', 'Material UI', 'Firebase', 'Node.js'],
    description:
      'Responsive website created for Beyond the Big 10 Podcast Network. Utilized React, Material UI, Firebase and Node.js',
    media: bytb10,
    liveSite: 'https://beyondthebig10.com',
    githubRepo: '',
    backgroundColor: '#14294b'
  },
  {
    name: 'Rick and Morty',
    madeWith: ['React', 'CSS', 'API'],
    description:
      'Responsive Website that allows users to search for their favorite Rick and Morty characters and get info about them, such as all of the episodes they starred in. Utilizes React, CSS, and Rick and Morty API. ',
    media: rickAndMorty,
    liveSite: '',
    githubRepo: 'https://github.com/leahpavone/rick-and-morty_react',
    backgroundColor: '#14294b'
  },
  {
    name: 'The Lonliest Chatroom',
    madeWith: ['JavaScript', 'HTML', 'CSS', 'API'],
    description:
      'Website that allows users to write in a chat and get back answers by calling the Chuck Norris API.',
    media: lonliestChatroom,
    liveSite: 'https://leahpavone.github.io/TheLonliestChatroom/',
    githubRepo: 'https://github.com/leahpavone/TheLonliestChatroom',
    backgroundColor: '#14294b'
  }
];
