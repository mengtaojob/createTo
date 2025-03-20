import { NextSeo } from 'next-seo'

interface SEOProps {
  title: string
  description: string
  path: string
}

export default function SEO({ title, description, path }: SEOProps) {
  return (
    <NextSeo
      title={`${title} | CreateTo 企业官网`}
      description={description}
      canonical={`https://yourdomain.com${path}`}
      openGraph={{
        url: `https://yourdomain.com${path}`,
        title,
        description,
        images: [
          {
            url: 'https://yourdomain.com/images/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'CreateTo Open Graph Image',
          },
        ],
      }}
    />
  )
}
