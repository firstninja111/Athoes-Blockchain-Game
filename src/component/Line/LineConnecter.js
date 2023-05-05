import './LineConnecter.css'
import Linexl from '../../assets/entirepage/Line-xl.png';
import Linelg from '../../assets/entirepage/Line-lg.png';
import Linemd from '../../assets/entirepage/Line-md.png';

function LineConnecter({size, direction='vertical'}) {
    return (
        <div className='d-flex justify-content-center'>
            <img className={`line line-size-${size}`} src={size == 'xl' ? Linexl : (size == 'lg' ? Linelg : Linemd)} alt="line"/>
        </div>
        
        
    );
}
export default LineConnecter;
