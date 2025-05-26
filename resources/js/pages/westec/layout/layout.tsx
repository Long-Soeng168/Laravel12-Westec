import MyFooter from '@/components/my-footer';
import { MyNavbar } from '@/components/my-navbar';
import { Toaster } from '@/components/ui/sonner';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const WestecLayout = ({ children }: LayoutProps) => {
    return (
        <div className="bg-white">
            <header className="sticky top-0 z-50">
                <MyNavbar />
            </header>

            <main className="mx-auto min-h-screen max-w-[2000px]">{children}</main>

            <MyFooter />
            <Toaster />
        </div>
    );
};

export default WestecLayout;
