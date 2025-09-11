
import './App.css';
import ByMe from './components/ByMe/ByMe';
import FloatingWhatsAppButton from './components/FloatingButton/FloatingButton';
import AboutMe from './components/me/Me';
import PrivacyPolicy from './components/privacy/Privacy';

import ProjectsScreen from './screens/ProjectsScreen';
import SecondScreen from './screens/SecondScreen';

import ArchitectLanding from './screens/ThirdScreen';
import FirstScreen from "./screens/FirstScreen"
import Recommendations from './components/recommends/Recommends';
import BeforeAfter from './screens/RecommendsScreen';
import Works from './components/recommends/Works';
import SevevnthScreen from './screens/SeventhScreen';
import SixthScreen from './screens/SixthScreen';
import PlayerColumns from './components/columns/Columns';
import MeScreen from './screens/MeScreen';
import NavBarNew from './components/NewNav orly/NavBarNew';
function App() {
  return <>
  {/* <ArcoriaTitleEffects/> */}
  {/* <ImageCarousel/> */}
  <NavBarNew/>
  <ArchitectLanding/>
{/* <SecondScreen/> */}
<SixthScreen/>
<PlayerColumns/>
<MeScreen/>
{/* <Works/> */}
<ProjectsScreen/>
<FirstScreen/>

<FloatingWhatsAppButton/>
<SevevnthScreen/>
{/* <Timeline/> */}
     <PrivacyPolicy 
                  ownerName="אורלי דבי" 
                  email="od.intdesign@gmail.com" 
                  phone="+972 50-273-7378" 
                  domain="https://orlydebi.co.il/" 
                />
                <ByMe/>
  </>
}

export default App;
