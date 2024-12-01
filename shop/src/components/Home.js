import Nav from './Nav';
import Cat from './home/Categories.2';
import Example from './home/slider';
import Prod from './home/products';
import OFF from './products/Offprdct';


function Home() {
  return (<>
    <Example />
    <Cat />
    <Prod />
    <div class="col-md-12 d-flex justify-content-center">
      <div class="d-flex justify-content-end col-md-11 border-bottom">
        <span class=" fontr h3  align-self-center">تخفیف ها</span>
      </div>
    </div>
    <OFF />
  </>);
}

export default Home;
