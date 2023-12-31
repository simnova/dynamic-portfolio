import mongoose from 'mongoose';
import { IBigProject } from '../interfaces/index';
const bigProjectsSchema = new mongoose.Schema({
  image: {
    type: String,
    default: 'https://i.imgur.com/8Q3ZQ2u.png',
  },
  overview: {
    type: String,
    default: 'Welcome to my portfolio',
  },
  codeLink: {
    type: String,
    default: 'http://nishanthapa.com',
  },
  liveLink: {
    type: String,
    default: 'http://nishanthapa.com',
  },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  technologies: {
    type: [
      {
        type: String,
      },
    ],
  },
});
const bigProjects = mongoose.model<IBigProject>('BigProjects', bigProjectsSchema);
export default bigProjects;
