import AvatarCodeBlock from '../component/AvatarCodeBlock'
import './Entire.css';
import SplitterDown from '../component/SplitterDown';
import SplitterUp from '../component/SplitterUp';
import Navbar from '../component/Navbar';
import TopBanner from '../component/TopBanner';
import ImageButton from '../component/Button/ImageButton';
import LineConnecter from '../component/Line/LineConnecter';
import EclipseItem from '../component/Eclipse/EclipseItem';

import Arrow from '../assets/entirepage/Arrow.png';

import Arrow1 from '../assets/entirepage/Arrow1.png';
import Arrow2 from '../assets/entirepage/Arrow2.png'; 
import outLine from '../assets/entirepage/outline.png';

function Entire() {
  return (
    <div>
      <TopBanner/>
      <Navbar/>
      <div className="Entire">
          <SplitterDown/>
          <div className='container'>
            <div className='row m-0'>
              <div className='col-lg-8 col-sm-12 p-0'>
                <div>
                  <div className='item-larage'>
                    <EclipseItem title="RAGNAROCK" size="xl" amount="1000" amountDirection="row"/>
                  </div>
                  <div className='position-relative item-medium middle-bahamut'>
                    <img className='image-arrow1' src={Arrow}/>
                    <EclipseItem title="BAHAMUT" size="lg" amount="890" amountDirection="column"/>
                    <img className='image-arrow2' src={Arrow}/>
                  </div>
                  <div className='item-small'>
                    <EclipseItem title="BUSHIDO" size="md" amount="577" amountDirection="column"/>
                  </div>
                </div>
                <div className='d-flex flex-wrap justify-content-center mt-2'>
                  <ImageButton size='md' type='red' text='321' comment='REQUIEM'/>
                  <ImageButton size='md' type='red' text='239' comment='SHIVA'/>
                  <ImageButton size='md' type='red' text='188' comment='BLACK DOWN'/>
                  <ImageButton size='md' type='red' text='55' comment='FORGIVEN'/>
                </div>
              </div>
              <div className='col-lg-4 col-sm-12'>
                <ImageButton size='xl' type='yellow' text='SIGN IN'/>
                <LineConnecter size='lg'/>
                <img src={outLine} alt="avatar-outline"/>
                <LineConnecter size='md'/>
                <ImageButton size='lg' type='green' text='VERIFY ACCOUNT'/>
                <LineConnecter size='xl'/>

                {/* 
                <ImageButton size='md' type='red' text='55' comment='FORGIVEN'/> */}
              </div>
            </div>
          </div>
          <SplitterUp/>
      </div>
    </div>
  );
}

export default Entire;
