import Footer from "@/shared/footer";
import Header from "@/shared/header";

const MainLayout = ({children}) => {
  return (
    <div className="container" >
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;