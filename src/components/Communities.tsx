import ImageCommunities from '../assets/images/screen-mockups.svg';
import IconCommunities from '../assets/images/icon-communities.svg';
import IconMessages from '../assets/images/icon-messages.svg';

const Communities = () =>{
    return(
        <div className='w-4/5 m-auto flex flex-col gap-12 items-center'>
            <div>
                <img src={ImageCommunities} alt="Imagem Communities" />
            </div>
            <div className='w-full flex flex-row justify-evenly'>
                <div className='flex gap-2 flex-col items-start'>
                    <img src={IconCommunities} alt="Icon Communities" />
                    <h1 className='text-xl lg:text-6xl font-bold infoCommunities'>1.4K+</h1>
                    <span className='textCommunities text-gray-500'>Communities Formed</span>
                </div>
                <div className='flex gap-2 flex-col items-start'>
                    <img src={IconMessages} alt="Icon Messages" />
                    <h1 className='text-xl lg:text-6xl font-bold infoCommunities'>2.7m+</h1>
                    <span className='textCommunities text-gray-500'>Messages Sent</span>
                </div>
            </div>
        </div>
    )
}

export default Communities;