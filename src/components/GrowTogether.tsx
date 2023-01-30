import BackgroundDesktop from '../assets/images/bg-section-top-desktop-1.svg'
import BackgroundDesktopBottom from '../assets/images/bg-section-bottom-mobile-1.svg'
import IllustrationGrow from '../assets/images/illustration-grow-together.svg';


const Growtogether = () =>{
    return(
        <div>
            <div><img className='w-full' src={BackgroundDesktop} alt="" /></div>
            <div className='containerGrowTogether'>
                <div className="flex w-4/5 m-auto justify-between flex-col-reverse lg:flex-row">
                    <div className='flex flex-col gap-8 justify-center pt-6 lg:pt-0 items-center lg:items-start'>
                        <h1 className='titleGrowTogether text-2xl lg:text-3xl font-bold'>Grow Together</h1>
                        <span className='textGrowTogether w-4/5 font-normal'>Generate meaningful discussions 
                            with your audience and build a strong, 
                            loyal community. Think of the insightful 
                            conversations you miss out on with a feedback form.
                        </span>
                    </div>
                    <div>
                        <img src={IllustrationGrow} alt="" />
                    </div>
                </div>
            </div>
            <div><img className='w-full' src={BackgroundDesktopBottom} alt="" /></div>
        </div>
    )
}


export default Growtogether;