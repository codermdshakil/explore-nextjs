import Image from "next/image";

import image from '@/assets/next.webp';

export const metadata = {
  title:"Gallery",
  description:"This is gallery descriptions"
}


const GalleryPage = () => {
  return (
    <div>
      <h1  className="text-center text-5xl">Image Optimaization</h1>
      <h3 className="text-center text-3xl my-3">Regular image</h3>
      <img width={500} height={500} className="mx-auto" src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/6389919/cover_image/regular_1708x683/Next-js-Improving-Page-Speed-of-a-Server-Side-React-App-Blog-7d4de23630c897d49e1c5be730ad5695.png" alt="Img Image" />
      
      <h3 className="text-center text-3xl my-3">Next js Image</h3>
      <Image 
      className="mx-auto"
      width={500} 
      height={500} 
      src={"https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/6389919/cover_image/regular_1708x683/Next-js-Improving-Page-Speed-of-a-Server-Side-React-App-Blog-7d4de23630c897d49e1c5be730ad5695.png"} />

      <h3 className="text-center text-3xl my-3">Image from local folder</h3>
      <Image 
      className="mx-auto"
      width={500} 
      height={500} 
      src={image} 
      alt="LocalImage"
      />
  

    </div>
  );
};

export default GalleryPage;
