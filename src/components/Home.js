import Cat from './home/category';
import Example from './home/slider';
import Prod from './home/products';
import OFF from './products/Offprdct';


function Home(theme) {
  return (<>
    <Example />
    <Cat theme={theme}/>
    <Prod theme={theme}/>
    <OFF theme={theme}/>
  </>);
}

export default Home;
