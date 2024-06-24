import './CSS/fonts.css'


export default function Premium() {


function toPremPage() {
  window.open('https://www.google.com', '_blank');
}

  return (
    <div className='prembg'>
        <div className='premiumHeader'>
            <h1>PREMIUM SELECTION</h1> 
        </div>
        <div  className='premiumcontainer'>
            <div onClick={toPremPage} className='premium1'>
              <div className='premimg1'>
                <div  className='premoverlay1'>
                  <h1 className='premoverlaytxt1 font-montserrat-bold goldfont'>SAMPAGUITA GREEN TEA</h1>
                  <p className='premoverlaytxt1 font-montserrat'>GREEN TEA INFUSED WITH THE FRAGRANCE OF SAMPAGUITA BUDS AND OILS</p>
                </div>
              </div>
              <div className='premtag1'>
                <h1 className='font-montserrat-bold '>SAMPAGUITA</h1>
                <h1 className='font-montserrat-bold '>GREEN</h1>
              </div>
            </div>


            <div onClick={toPremPage} className='premium2'>
              <div className='premimg2'>
                <div  className= 'premoverlay2'>
                  <h1 className='premoverlaytxt2 font-montserrat-bold goldfont'>MANGO BLACK TEA</h1>
                  <p className='premoverlaytxt2 font-montserrat'>A TROPICAL DANCE OF RICH BLACK TEA AND DRIED SWEET MANGOES</p>
                </div>
              </div>
              <div className='premtag2'>
                <h1 className='font-montserrat-bold'>MANGO</h1>
                <h1 className='font-montserrat-bold '>BLACK</h1>
              </div>
            </div>
        </div>




        <div  className='premiumcontainer'>



            <div onClick={toPremPage} className='premium3'>
              <div className='premtag3'>
                <h1 className='font-montserrat-bold'>DURIAN</h1>
                <h1 className='font-montserrat-bold'>BLACK</h1>
              </div>
                <div className='premimg3'>
                <div  className='premoverlay3'>
                  <h1 className='premoverlaytxt3 font-montserrat-bold goldfont'>DURIAN BLACK TEA</h1>
                  <p className='premoverlaytxt3 font-montserrat'>DISCOVER THE UNIQUE SUBTLE TASTE OF DURIAN PAIRED WITH SMOOTH BLACK TEA</p>
                </div>
                </div>
            </div>


            <div onClick={toPremPage} className='premium4'>
              <div className='premtag4'>
                <h1 className='font-montserrat-bold'>BUKO</h1>
                <h1 className='font-montserrat-bold'>BLACK</h1>
              </div>
              <div className='premimg4'>
                <div  className='premoverlay4'>
                  <h1 className='premoverlaytxt4 font-montserrat-bold goldfont'>BUKO BLACK TEA</h1>
                  <p className='premoverlaytxt4 font-montserrat'>A CREAMY ESCAPE OF  SILKY BLACK TEA WITH DRIED COCONUT FLESH</p>
                </div>
              </div>
            </div>


        </div>
    </div>
  );
}