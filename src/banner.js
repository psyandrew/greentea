

export default function Banner() {


  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutus');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="TeaBanner row">
      <div className="col-5">
        <div className="TeaBannerColumn">
          <div className="TeaBannerText">
            <h2 className="text-nowrap">
              TEA LEAVES RAISED BY TEA LOVERS
            </h2>
            <div className="TeaLine">_</div>
            <h1>TEA GARDEN FIELDS OF TAGAYTAY</h1>

            <p className="TeaBannerParagraph">
              Indulge in the refreshing and invigorating experience of our
              premium green tea leaves. Sourced from the finest tea gardens, our
              green tea offers a symphony of flavor and wellness with each sip
              revitalizing your senses. Delicately cultivated to deliver a
              smooth, earthy taste with every brew. Elevate your day with the
              vibrant energy and countless health benefits packed in every cup.
            </p>

            <button onClick={scrollToAboutUs}  className='greenbutton'>LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="col-7">
        </div>
    </div>
  );
}
