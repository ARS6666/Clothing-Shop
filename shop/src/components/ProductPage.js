import PI from './productsinfo/PI';
import CommentBox from './productsinfo/CommentBox';
import CommonProducts from './products/Offprdct';


function ProductPage() {
  return (<>
    <PI />
    <CommentBox />
    <div class="col-md-12 d-flex justify-content-center pt-5">
      <div class="d-flex justify-content-end col-md-11 border-bottom">
        <span class=" fontr h3  align-self-center">محصولات مشابه</span>
      </div>
    </div>
    <CommonProducts />
  </>);
}

export default ProductPage;
