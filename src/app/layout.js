import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Google',
    description: `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking...
    `,
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
