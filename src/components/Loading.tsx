const Loading = () =>{
    return(
        <div className="flex justify-center items-center w-full h-screen bg-gray-700 gap-3 flex-row">
            <div className="animate-pulse text-lg text-pink-400 uppercase">Loading</div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-pink-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-pink-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-pink-400"></div>
        </div>
    )
}

export default Loading;