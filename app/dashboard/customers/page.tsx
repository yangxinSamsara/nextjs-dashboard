import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
  keywords: 'customers, nextjs, learn, dashboard',
  icons: { icon: '/amy-burns.png' },
};
export default function Page() {
  return <p>Customers Page</p>;
}
