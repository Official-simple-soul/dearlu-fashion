import Link from "next/link";

export default function Custom404() {
  return (
    <div className="pt-[58px] h-screen flex flex-col justify-center items-center">
     
     <h1 className="text-[100px] md:text-[200px] font-bold animate-[bounce_2s_ease-in-out_infinite]">404</h1>
      <h1 className="md:text-3xl font-bold mb-5">Sorry Dear, YOU DON MISS ROAD O</h1>
      <h2>CLick <span><Link href={'/'} className='border px-4 py-2 bg-white text-black rounded-md mt-4 mx-3 md:text-2xl'>HOME</Link></span> to go back home</h2>
      
    </div>
  );
}
