const config = {
  siteTitle: "David Kindler Blog", // Site title.
  siteTitleShort: "DK Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Blog site for David Kindler", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://davidkindler.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A blog site with advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteCover: 'cover-baymax.jpeg',
  googleAnalyticsID: "UA-155193645-1", // GA tracking ID for davidkindler.github.io.
  disqusShortname: "https-davidkindler-github-io", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "David", // Username to display in the author segment.
  userEmail: "kindlerdavid-github-io@kindler.email", // Email used for RSS feed's author segment
  userTwitter: "kindlerdavid", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Austin, Texas", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/abott@adorable.png", // User avatar to display in the author segment.
  authorName: "David",
  authorAvatar: "https://api.adorable.io/avatars/150/abott@adorable.png", // User avatar to display in the author segment.
  authorDescription: `
  Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.
  `,
  userDescription:
    "Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  headerTitle: 'David Kindler',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  icon: 'content/images/baymax.png',
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/DavidKindler",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/KindlerDavid",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:kindler-github@kindler.email",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020. David Kindler", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0",
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
        // {
        //   label: 'Installation',
        //   url: '/how-to-install',
        // },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/davidkindler',
        },
        {
          label: 'Website',
          url: 'https://davidkindler.com',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/kindlerdavid',
        },
      ],
    },
  ], // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
