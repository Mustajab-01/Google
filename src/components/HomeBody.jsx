import { MdSearch, MdMic } from 'react-icons/md';

const HomeBody = () => {
    return (
        <section className='min-w-full min-h-[75vh] flex-col gap-4 flex justify-center items-center'>
            <img src='/google.png' width={272} height={92} />
            <form className='relative w-full flex items-center justify-center'>
                <MdSearch className='translate-x-9 text-xl' />
                <input
                    type='text'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none focus:ring-blue-500 focus:border-blue-500 block w-2/4 rounded-full pl-10 p-3'
                    placeholder='Search Google or type a URL'
                    required
                />
                <MdMic className='-translate-x-10 text-xl' />
            </form>
            <div className='flex items-center gap-5'>
                <button className='px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-all ease-in-out duration-500 rounded-lg text-sm font-bold shadow-md'>
                    Google Search
                </button>
                <button className='px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-all ease-in-out duration-500 rounded-lg text-sm font-bold shadow-md'>
                    I'm feeling lucky
                </button>
            </div>
        </section>
    );
};

export default HomeBody;
