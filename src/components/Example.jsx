import Lottie from "lottie-react";
import Motion from "../assets/Motion.json";
import { useRef } from "react";



const Example = () => {
    const AiAnimeRef = useRef(null);
    const style = {
    width: "200px",
    
    
    }
    
    
return(
    <>
    <Lottie style={style} animationData={Motion} loop={true}
    autoPlay={true} lottieRef={AiAnimeRef} onLoopComplete={()=>AiAnimeRef.current.setDirection(-1)} />

    </>
)
  

  };
  
  export default Example;