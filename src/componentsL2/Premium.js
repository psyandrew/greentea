import '../CSS/fonts.css'


export default function Premium() {


function handleClick() {
  window.open('https://www.google.com', '_blank');
}

  return (
    <div>
        <div className= 'premiumHeader'>
            <h1>PREMIUM SELECTION</h1> 
        </div>
        <div  className='premiumcontainer'>
            <div onClick={handleClick} className='premium1'>
              <div className='premimg1'>
                <div  className='premoverlay1'>
                  <p className='premoverlaytxt1 font-roboto'>GREEN TEA INFUSED WITH THE FRAGRANCE OF SAMPAGUITA BUDS AND OILS</p>
                </div>
              </div>
              <div className='premtag1'>
                <h1 className='font-roboto'>SAMPAGUITA</h1>
                <h2 className='font-roboto'>GREEN</h2>
              </div>
            </div>


            <div onClick={handleClick} className='premium2'>
              <div className='premimg2'>
                <div  className= 'premoverlay2'>
                  <p className='premoverlaytxt2 font-roboto'>EMBARK ON A TROPICAL JOURNEY WITH RICH BLACK TEA AND DRIED SWEET MANGOES</p>
                </div>
              </div>
              <div className='premtag2'><h1 className='font-roboto'>MANGO</h1><h2 className='font-roboto'>BLACK</h2></div>
            </div>
        </div>
        <div  className='premiumcontainer'>


            <div onClick={handleClick} className='premium3'>
            <div className='premtag3'><h1 className='font-roboto'>DURIAN</h1><h2 className='font-roboto'>BLACK</h2></div>
              <div className='premimg3'>
                <div  className='premoverlay3'>
                  <p className='premoverlaytxt3 font-roboto'>DISCOVER THE UNIQUE SUBTLE TASTE OF DURIAN PAIRED WITH SMOOTH BLACK TEA</p>
                </div>
              </div>
            </div>


            <div onClick={handleClick} className='premium4'>
            <div className='premtag4'><h1 className='font-roboto'>BUKO</h1><h2 className='font-roboto'>BLACK</h2></div>
              <div className='premimg4'>
                <div  className='premoverlay4'>
                  <p className='premoverlaytxt4 font-roboto'>A CREAMY ESCAPE OF  SILKY BLACK TEA WITH DRIED COCONUT FLESH</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}