import FuterLogo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='max-w-full mx-auto border-gray-200 border-t-2 '>
            <div className="max-w-6xl mx-auto justify-between items-center py-4 px-4    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                <div className='p-4 space-y-2'>
                    <img src={FuterLogo} alt="" />

                    <p className='text-1'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className='flex gap-4 list-none cursor-pointer py-4'>
                        <li className='text-[15px]  text-gray-700 font-bold'>GitHub</li>
                        <li className='text-[15px]  text-gray-700 font-bold'>Twitter</li>
                        <li className='text-[15px]  text-gray-700 font-bold'>Linkdin</li>
                    </div>
                </div>

                <div className='list-none p-4 space-y-2 cursor-pointer'>
                    <h4 className=' font-bold'>PRODUCT</h4>
                    <li className='text-[15px]'>Home</li>
                    <li className='text-[15px]'>Technologies</li>
                    <li className='text-[15px]'>Project</li>
                </div>
                <div className='list-none p-4 space-y-2 cursor-pointer'>
                    <h4 className=' font-bold'>COMPANY</h4>
                    <li className='text-[15px]'>About</li>
                    <li className='text-[15px]'>Contuct</li>
                    <li className='text-[15px]'>Careers</li>
                </div>
                <div className='list-none p-4 space-y-2 cursor-pointer'>
                    <h4 className=' font-bold'>LEGAL</h4>
                    <li className='text-[15px]'>Privacy Policy</li>
                    <li className='text-[15px]'>Terms of Service</li>

                </div>


            </div>
            <div className='max-w-6xl mx-auto flex justify-between items-center py-4 px-4  border-gray-200 border-t-2'>
                <div >
                    <p className='text-[15px]'>© 2026 Dev Stack. All rights reserved.</p>

                </div>
                <div className='flex gap-4 list-none text-[15px]'>
                    <li>Privacy</li>
                    <li>Terms</li>
                </div>
            </div>
        </div>
    );
};

export default Footer;