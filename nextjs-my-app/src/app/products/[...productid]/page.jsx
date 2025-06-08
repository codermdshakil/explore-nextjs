const CatchAllProduct = async ({params, searchParams}) => {

  const {productid} = await params; // used to get params dynamic id
  const {category} = await searchParams; // used to get query
  console.log(productid);
  console.log(category);

  return (
    <div>
      <h1>Catch all products</h1>
    </div>
  );
};

export default CatchAllProduct;