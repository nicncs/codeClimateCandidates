import { environment as env } from '../../../environments/environment';

export interface Feature {
  name: string;
  version?: string;
  description: string;
  github?: string;
  documentation: string;
  medium?: string;
}

export const features: Feature[] = [
  {
    name: 'Order management',
    version: 'online',
    description: 'Modern powerful management',
    github: 'https://github.com/',
    documentation: 'https://sotatek.com'
  },
  {
    name: 'Payment Service',
    version: 'online',
    description: 'Your smart choice for payment solutions in VN',
    github: 'https://github.com/',
    documentation: 'https://sotatek.com'
  }
  // {
  //   name: 'OMS',
  //   version: 'online',
  //   description: 'Current portal',
  //   github: 'https://github.com/',
  //   documentation: 'https://sotatek.com'
  // }
];
