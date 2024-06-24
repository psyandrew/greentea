import './CSS/button.css'
import './CSS/fonts.css'



export default function Selection() {


  function SelectionComponent(props) {
  const selectionimg = props.selectiontag[0];
  const selectiontag = props.selectiontag[1]; 

  return (
    <span onClick={toPage('https://www.instagram.com ')} className={`Selection ${selectionimg}`}>
      <h1 className='seltag font-montserrat'>{selectiontag}</h1>
      <span className="selimg"></span>
    </span>
  );
}



  function toPage(openLink) {
  return function() {
    window.open(openLink, '_blank');
    };
  }

const tag = [['Jasmine','Jasmine Green Tea'], ['Lemon','Lemon Green Tea'], ['Peach','Peach Green Tea'], ['White','White Tea'],
              ['Apple','Apple Green Tea'],['Sencha','Japanese Sencha'], ['EB','English Breakfast'], ['EG','Earl Grey Tea'],  ['LG',' Lady Grey Tea'],
              ['Oolong','Oolong Tea'],['Pineapple','Pineapple Black'],['Strawberry','Strawberry Black']]

  return (
    <div className='selectionbg' id='selection'>
      <div>
        <div className='Selection'>
          <div className='SelectionHeaders'>
            <h1 className='font-montserrat'>CLASSIC SELECTION</h1>
            <h2 className='font-montserrat'>Green Tea Collection</h2>
          </div>
          <div className='SelectionItems'>
              <SelectionComponent   selectiontag ={tag[0]}/>
              <SelectionComponent   selectiontag ={tag[1]}/>
              <SelectionComponent   selectiontag ={tag[2]}/>
              <SelectionComponent   selectiontag ={tag[3]}/>
              <SelectionComponent   selectiontag ={tag[4]}/>
              <SelectionComponent   selectiontag ={tag[5]}/>
          </div>
        </div>
      </div>
      <div>
        <div className='Selection'>
          <div className='SelectionHeaders'>
            <h2 className='font-montserrat'>Black Tea Collection</h2>
          </div>
          <div className='SelectionItems'>
              <SelectionComponent  selectiontag ={tag[6]}/>
              <SelectionComponent  selectiontag ={tag[7]}/>
              <SelectionComponent  selectiontag ={tag[8]}/>
              <SelectionComponent  selectiontag ={tag[9]}/>
              <SelectionComponent  selectiontag ={tag[10]}/>
              <SelectionComponent  selectiontag ={tag[11]}/>
          </div>
        </div>
      </div>
    </div>
  );
}
