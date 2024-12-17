import PI from './productsinfo/PI';
import CommentBox from './productsinfo/CommentBox';
import CommonProducts from './productsinfo/commonProducts';


function ProductPage(theme) {
  return (<>
    <PI theme={theme} />
    <CommentBox theme={theme}/>
    <CommonProducts theme={theme}/>
  </>);
}

export default ProductPage;
