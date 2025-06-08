import Card from "@/components/card/page";

export const metadata = {
  title:"Shoes",
  description:"Here all shows are shown"
}


const ShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    // cache:"force-cache" // it make static
    // next:{
    //   revalidate:5 // 5 means after every 5 sec site will be updated
    // }
    cache:'no-store' // its make server side rendaring when client request then just show data don't store 
  });
  const shoes = await res.json();

  return (
    <div>
      <div className="container">
        <h2 className="text-2xl font-semibold my-4">Show all Shoes</h2>
        <div className="grid grid-cols-3 gap-3 ">
          {shoes.map((shoe) => (
            <Card key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoesPage;
