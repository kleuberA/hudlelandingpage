import IllustrationFlowing from '../assets/images/illustration-flowing-conversation.svg';

const FlowingConversations = () =>{
    return(
        <div>
        
        <div className=''>
            <div className="flex w-4/5 m-auto justify-between gap-10 flex-col lg:flex-row">
                <div>
                    <img src={IllustrationFlowing} alt="" />
                </div>
                <div className='flex flex-col gap-8 justify-center items-center lg:items-start'>
                    <h1 className='titleFlowingConversation text-2xl lg:text-3xl font-bold'>Flowing Conversations</h1>
                    <span className='textFlowingConversation w-4/5 font-normal'>You wouldn't paginate a 
                        conversation in real life, so 
                        why do it online? Our threads have 
                        just-in-time loading for a more 
                        natural flow. 
                    </span>
                </div>
            </div>
        </div>
        
    </div>
    )
}


export default FlowingConversations;