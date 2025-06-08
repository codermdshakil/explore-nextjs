const SlugPageToCatch = async ({params}) => {
   const {shopId} = await params;
   console.log(shopId, 'hit catch');

  return (
    <div>
      <h1>This is route to catch all subsequent </h1>
    </div>
  );
};

export default SlugPageToCatch;