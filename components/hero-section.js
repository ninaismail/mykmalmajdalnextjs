import { useEffect, useRef } from 'react';

function HeroSection() {
  const videoRef = useRef();

  useEffect(() => {
      setTimeout(()=>{
          videoRef.current.play()
      },5000)
  }, []);
  return (
<div>
<div className="relative bottom-40 right-0 flex items-center justify-start w-full">
  <video className='object-cover'
    ref={videoRef}
    width="1920"
    height="1080"
    loop
    muted>
      <source src="/15-sec.mp4"/>
  </video>
</div>
</div>
  );
}

export default HeroSection;