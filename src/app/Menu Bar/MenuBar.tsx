import Link from "next/link";
function MenuBar(){
return(
    <div className="Menu-container fixed top-14 bg-black text-white w-full h-full flex flex-col justify-center items-center gap-10 z-40">
    <Link href="/contact">Contact</Link>
    <Link href="/Services">Services</Link>
    <Link href="/About">About</Link></div>

    );
}
export default MenuBar;
