// src/app/head.tsx

import React from 'react';

const Head: React.FC = () => {
  return (
    <>
      <title>Captech - Innovative Street Lighting Solutions</title>
      <meta name="description" content="Captech offers innovative and energy-efficient street lighting solutions to brighten the future." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content="Captech - Innovative Street Lighting Solutions" />
      <meta property="og:description" content="Captech provides top-tier street lighting solutions that combine innovation, quality, and sustainability." />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:url" content="https://your-domain.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your_twitter_handle" />
      <meta name="twitter:title" content="Captech - Innovative Street Lighting Solutions" />
      <meta name="twitter:description" content="Captech offers innovative and energy-efficient street lighting solutions." />
      <meta name="twitter:image" content="/images/twitter-image.jpg" />
    </>
  );
};

export default Head;