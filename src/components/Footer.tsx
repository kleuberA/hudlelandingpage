import BackgroundFooter from '../assets/images/bg-footer-top-desktop.svg';
import Logo from '../assets/images/logoFooter.svg';
import IconPhone from '../assets/images/icon-phone.svg';
import IconMail from '../assets/images/icon-email.svg';

const Footer = ( ) => {
    return(
        <div>
            <div><img className='w-full' src={BackgroundFooter} alt="" /></div>
            <div className='containerFooter '>
                <div className="flex w-4/5 m-auto justify-between gap-6 lg:gap-20 flex-col-reverse lg:flex-row">
                    <div className='flex flex-col justify-around items-start gap-3 text-gray-500'>
                        <img src={Logo} alt="" className='h-9 lg:h-auto'/>
                        <span className='lg:w-96'>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. 
                                Mauris nulla quam, hendrerit 
                                lacinia vestibulum a, 
                                ultrices quis sem.
                        </span>
                        <span className='flex flex-row gap-3 items-center'><img src={IconPhone} alt="Icon Phone"/>Phone: +1-543-123-4567</span>
                        <span className='flex flex-row gap-3 items-center pb-11'><img src={IconMail} alt="Icon Mail"/>example@huddle.com </span>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-3 text-white'>
                        <h1 className='uppercase text-white font-medium text-2xl'>NEWSLETTER</h1>
                        <span className='w-64 lg:w-1/2'>To recieve tips on how to 
                            grow your community, sign up to 
                            our weekly newsletter. We’ll never 
                            send you spam or pass on your email 
                            address
                        </span>
                        <div className='flex flex-row gap-3 justify-center items-start'>
                            <input className='rounded-md h-10 text-black outline-none pl-2' type="text" name="textSubscribe" id="" />
                            <button className='rounded-md h-10 buttonSubscribe w-28 lg:w-36'>Subcribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}


export default Footer;