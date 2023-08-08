import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-gray-200 h-[11.3vh] p-6 flex justify-between items-center'>
            <div>
                <Link href='https://google.com' className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-red-600 font-bold text-2xl font-mono to-green-600'>Google</Link>
                <div className='flex items-center gap-4'>
                    <Link
                        href='/'
                        className='text-xs hover:underline underline-offset-4'
                    >
                        About
                    </Link>
                    <Link
                        href='/'
                        className='text-xs hover:underline underline-offset-4'
                    >
                        Private Policy
                    </Link>
                    <Link
                        href='/'
                        className='text-xs hover:underline underline-offset-4'
                    >
                        Services
                    </Link>
                    <Link
                        href='/'
                        className='text-xs hover:underline underline-offset-4'
                    >
                        Products
                    </Link>
                </div>
            </div>
            <h3 className='text-[0.85rem] font-serif'>Google @copyright 2023 ®</h3>
        </footer>
    );
};

export default Footer;
