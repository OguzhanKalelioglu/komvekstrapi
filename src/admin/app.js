import AuthLogo from './extensions/komvek_logo.png';
import MenuLogo from './extensions/komvek_logo.png';

export default {
    config: {
      // Replace the Strapi logo in auth (login) views
      auth: {
        logo: AuthLogo,
      },
      // Replace the Strapi logo in the main navigation
      menu: {
        logo: MenuLogo,
      },
     // Extend the translations
     // Disable video tutorials
      tutorials: false,
     // Disable notifications about new Strapi releases
      notifications: { release: false },
    },
  
    bootstrap() {},
  };