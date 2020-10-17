import Head from 'next/head';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

export default function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}: SEOProps) {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| Leve a felicidade para o mundo' : ''}`;
  const pageImage = image ? `http://localhost:3000/${image}` : null;

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {image && <meta name="name" content={pageImage} />}

      { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" /> }
    </Head>
  );
}


