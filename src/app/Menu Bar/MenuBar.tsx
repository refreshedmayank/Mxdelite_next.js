import Link from "next/link";
function MenuBar(){
return(
    <div className="Menu-container ">
    <Link href="/contact">Contact</Link>
    <Link href="/Services">Services</Link>
    <Link href="/contact">Problems</Link>
    <Link href="/About">About</Link>



        
        
    </div>

    );
}
export default MenuBar;