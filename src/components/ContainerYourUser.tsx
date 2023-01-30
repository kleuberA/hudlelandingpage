import BackgroundDesktop from '../assets/images/bg-section-top-desktop-2.svg'
import BackgroundDesktopBottom from '../assets/images/bg-section-bottom-desktop-2.svg'
import IllustrationYourUsers from '../assets/images/illustration-your-users.svg';


const ContainerYourUser = () =>{
    return(
        <div>
            <div><img className='w-full' src={BackgroundDesktop} alt="" /></div>
            <div className='containerGrowTogether'>
                <div className="flex w-4/5 m-auto justify-between flex-col-reverse lg:flex-row">
                    <div className='flex flex-col gap-8 justify-center items-center lg:items-start pt-6 lg:pt-0'>
                        <h1 className='titleGrowTogether text-3xl font-bold'>Your Users</h1>
                        <span className='textGrowTogether w-4/5 font-normal'>It takes no time at all to integrate Huddle with 
                            your app's authentication solution. This means, once 
                            signed in to your app, your users can start chatting immediately.
                        </span>
                    </div>
                    <div>
                        <img src={IllustrationYourUsers} alt="" />
                    </div>
                </div>
            </div>
            <div><img className='w-full' src={BackgroundDesktopBottom} alt="" /></div>
        </div>
    )
}


export default ContainerYourUser;