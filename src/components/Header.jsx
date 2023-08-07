import { TbGridDots } from 'react-icons/tb';

const Header = () => {
    return (
        <header className='text-gray-500 w-full gap-4 flex justify-end items-center p-6'>
            <a href='https://mail.google.com' className='text-xs hover:underline underline-offset-4'>Gmail</a>
            <a href='https://www.google.com/imghp' className='text-xs hover:underline underline-offset-4'>Images</a>
            <button className='rounded-full hover:bg-gray-200 transition-all ease-in-out duration-500 p-2 text-xl'>
                <TbGridDots />
            </button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all ease-in-out duration-500 font-bold text-sm'>Sign in</button>
        </header>
    );
};

export default Header;
