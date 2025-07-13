import React, {useRef, useState} from 'react'

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const totalVideos = 3;

    const nextVideoRef = useRef(null);

    const upcomingVideoIndex = ()=> (currentIndex % totalVideos) + 1;

    const getVideoSrc = (index)=>`videos/hero-${index}.mp4`


    const handleMiniVdClick = () => {

        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);

    }

    const handleOnLoadedData = ()=>{
        setLoadedVideo(prevIndex => prevIndex + 1);
    }

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-50 flex items-center justify-center">
                <div
                    className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                    <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in
                                    hover:scale-100 hover:opacity-100" onClick={handleMiniVdClick}>
                        <video
                            ref={nextVideoRef}
                            src={getVideoSrc(upcomingVideoIndex())}
                            loop
                            muted
                            id="current-video"
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handleOnLoadedData}
                        />
                    </div>
                </div>
                <video
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex)}
                />
                <video
                    src={getVideoSrc(
                        currentIndex === totalVideos - 1 ? 1 : currentIndex
                    )}
                    // autoPlay
                    loop
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                    onLoadedData={handleOnLoadedData}
                />
                <h1 className="font-Bitcount hero-heading absolute bottom-5 right-5 z-40 text-slate-300 text-xl">
                    G<b>A</b>MING
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="font-Bitcount hero-heading text-blue-100">
                            redefi<b>n</b>e
                        </h1>

                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                            Enter the Metagame Layer <br /> Unleash the Play Economy
                        </p>

                        {/*<Button*/}
                        {/*    id="watch-trailer"*/}
                        {/*    title="Watch trailer"*/}
                        {/*    leftIcon={<TiLocationArrow />}*/}
                        {/*    containerClass="bg-yellow-300 flex-center gap-1"*/}
                        {/*/>*/}
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Hero
