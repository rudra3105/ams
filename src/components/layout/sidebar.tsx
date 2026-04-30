import Link from 'next/link';
const items = ['dashboard','companies','members','invoices','events','imports','exports','settings'];
export function Sidebar(){return <aside className='w-64 p-4 border-r min-h-screen bg-white'>{items.map(i=><Link key={i} className='block py-2 capitalize' href={`/${i}`}>{i}</Link>)}</aside>}
