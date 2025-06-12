import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'lotus-media.github.io',
        port: '',
        pathname: '/blog/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'blog.lts.app.br',
        port: '',
        pathname: '/**',
        search: '',
      }, 
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ]
  }
};

export default withMDX(nextConfig);
