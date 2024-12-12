import Nav from './Nav';
import Cat from './home/category';
import Example from './home/slider';
import Prod from './home/products';
import OFF from './products/Offprdct';


function Home() {
  return (<>
    <Example />
    <Cat />
    <Prod />
    <OFF />
  </>);
}

export default Home;
