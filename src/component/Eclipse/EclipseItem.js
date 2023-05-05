import './EclipseItem.css'
import eclipseImgXl from '../../assets/entirepage/Eclipse-xl.png';
import eclipseImgLg from '../../assets/entirepage/Eclipse-lg.png';
import eclipseImgMd from '../../assets/entirepage/Eclipse-md.png';
import singleLine from '../../assets/entirepage/singleLine.png';
import singleLineVertical from '../../assets/entirepage/singleLine-Vertical.png';



function EclipseItem({title, amount, size, amountDirection}) {
    return (
        <div className= {`eclipse-group-${amountDirection}`}>
            <p className={`eclipse-title-${amountDirection} mb-2`}>{title}</p>
            <div className={`d-flex flex-${amountDirection} align-items-center justify-content-end`}>
                <img className={`eclipse eclipse-size-${size}`} src={size == 'xl' ? eclipseImgXl : (size == 'lg' ? eclipseImgLg : eclipseImgMd)} alt="eclipse"/>
                <img src={amountDirection == 'row' ? singleLine : singleLineVertical} alt="singleLine"/>
                <p className='eclipse-amount mb-0 ms-2'>{amount}</p>
            </div>
        </div>
    );
}
export default EclipseItem;
