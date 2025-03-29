import React from 'react';
import Layout from '@theme-original/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LayoutWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <>
      <Layout {...props} />
      <Head>
        <script type="application/ld+json">
          {siteConfig.customFields.jsonLd}
        </script>
      </Head>
    </>
  );
}
