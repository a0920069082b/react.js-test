const ProductAPI= "http://localhost:3000/product.json";
/**
 * 取得產品資料
 */
function get(){
  return fetch(ProductAPI)
    .then(response => response.ok ? response.json() : [])
    .catch(err => console.log('錯誤', err));
}

export default { get };