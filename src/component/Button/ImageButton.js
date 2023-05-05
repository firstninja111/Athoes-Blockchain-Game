import './ImageButton.css'
import backGreen from "../../assets/entirepage/button-green.png";
import backRed from "../../assets/entirepage/button-red.png";
import backYellow from "../../assets/entirepage/button-yellow.png";

function ImageButton({type, text, size, comment}) {
    return (
        <div className='mx-2 d-flex justify-content-center'>
            <div>
                <div className='image-button-comment'>
                    <span>{comment}</span>
                </div>
                <div className={`image-button size-${size} button-${type}`}>
                    <span>{text}</span>
                </div>    
            </div>
        </div>
        
        
    );
}
export default ImageButton;
