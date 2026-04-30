import { ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { Topbar } from './topbar';
export function AppShell({children}:{children:ReactNode}){return <div className='flex'><Sidebar/><div className='flex-1'><Topbar/><main className='p-6'>{children}</main></div></div>}
