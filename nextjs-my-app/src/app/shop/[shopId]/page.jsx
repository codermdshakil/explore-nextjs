const SingleShopProduct = async ({params, searchParams}) => {

  const {shopId} = await params;
  const {category} = await searchParams;
  console.log(shopId, 'single page');
  console.log(category, 'sigle page');

  return (
    <div>
      <h1>Product Id: {shopId}</h1>
    </div>
  );
};

export default SingleShopProduct;