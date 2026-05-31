import { client } from '@/sanity/lib/client';
import CommissionClient from './CommissionClient';
import styles from './page.module.css';

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface Pricing {
  label: string;
  value: string;
}

interface CommissionType {
  _id: string;
  name: string;
  image: SanityImage;
  prices: Pricing[];
  order: number;
}

const DATA_QUERY = `
  {
    "settings": *[_type == "siteSettings"][0]{commissionsOpen},
    "types": *[_type == "commission"] | order(order asc) {
      _id,
      name,
      image,
      prices,
      order
    }
  }
`;

export default async function CommissionPage() {
  // Fetch data from Sanity on the server
  const res = await client.fetch(DATA_QUERY);
  
  const settings = res.settings || { commissionsOpen: true };
  const types: CommissionType[] = res.types || [];

  return (
    <main className={styles.container}>
      <CommissionClient settings={settings} types={types} />
    </main>
  );
}
