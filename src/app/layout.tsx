import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['400', '500', '900'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Kenzie Car',
    description: 'Projeto final modulo 6',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
