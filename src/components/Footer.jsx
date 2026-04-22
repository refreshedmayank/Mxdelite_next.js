'use client';

function Footer() {
  function sendtoinstagram(){
    window.open("https://www.instagram.com/mxdelite/", "_blank");
  }
  
  function sendtoemail(){
    const Email = "mxdelite@gmail.com"
    window.location.href = `mailto:${Email}`;
  }
  
  return (
    <div className=" mt-auto py-4 ">
    <div className="footer flex justify-center gap-4 ">
      <h2 onClick={sendtoinstagram} >Instagram</h2>
      <h2 onClick={sendtoemail}>Email</h2>
    </div>
    </div>
  );
}

export default Footer;