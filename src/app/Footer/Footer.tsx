function Footer(){
function Email(){

}
function Instagram(){

}
return(
<div className="fixed bottom-0 w-full">
 <div className="Footer-Container   bg-black text-white p-2 flex  justify-center gap-4 ">
  <span onClick={Instagram} className="">Instagram</span>
  <span onClick={Email}>Email</span>
 </div>
 </div>
);
}
export default Footer;