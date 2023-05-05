import Navbar from '../component/Navbar';
import Character from '../component/InnerPages/Character';
import Hero from '../component/InnerPages/Hero';
import Introduce from '../component/InnerPages/Introduce';
import Partnership from '../component/InnerPages/Partnership';
import DocSlider from '../component/InnerPages/DocSlider';
import Footer from '../component/InnerPages/Footer';
import SplitterUp from '../component/SplitterUp';
import SplitterDown from '../component/SplitterDown';
import MusicPlayer from '../component/InnerPages/MusicPlayer'
import VidoePopUp from '../component/InnerPages/VidoePopUp'

function Home() {
  return (
    <div className="Home">
        <VidoePopUp/>
        <Navbar/>
        <Character/>
        <Hero/>
        <SplitterDown/>
        <Introduce/>
        <SplitterUp/>
        <DocSlider/>
        <SplitterDown/>
        <Partnership/>
        <SplitterUp/>
        <Footer/>
        <MusicPlayer/>
    </div>
  );
}

export default Home;
