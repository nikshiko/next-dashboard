import SideNav from '@/app/ui/dashboard/sidenav';

// Notes: Every layout receives a children prop, the children prop can either be a page or another layout
// Apparantly one of the benefits of layout is that the layout doesn't re-render, only the page component updates - partial rendering
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
