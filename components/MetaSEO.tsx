interface MetaSEOProps {
    title: string;
    description: string;
    image: string;
}

export function MetaSEO({title, description, image}: MetaSEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} key="desc" />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={title} key="og:title" />
      <meta property="og:description" content={description} key="og:desc" />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta property="twitter:description" content={description} key="twitter:desc" />
      <meta property="twitter:image" content={image} key="twitter:image" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}