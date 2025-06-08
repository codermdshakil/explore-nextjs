const DynamicProductPage = async ({ params }) => {
  const { productId } = await params;

  // console.log(productId, "from dynamic page");
  // console.log(typeof productId, "from dynamic page");

  return (
    <div>
      <h1>Dynamic Single Product page</h1>
    </div>
  );
};

export default DynamicProductPage;
