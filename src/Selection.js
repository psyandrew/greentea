import SelectionComponent from './componentsL2/selectioncomponent.js'
import Premium from './componentsL2/Premium.js'
import './CSS/button.css'
import './CSS/fonts.css'



export default function Selection() {


function handleClick() {
  window.open('https://www.google.com', '_blank');
}

const Tag1 = ['Jasmine','Jasmine Green Tea']
const Tag2 = ['Lemon','Lemon Green Tea']
const Tag3 = ['Peach','Peach Green Tea']
const Tag4 = ['White','White Tea']
const Tag5 = ['Apple','Apple Green Tea']
const Tag6 = ['Sencha','Japanese Sencha']
const Tag7 = ['EB','English Breakfast'] 
const Tag8 =   ['EG','Earl Grey']
const Tag9 =  ['LG',' Lady Grey']
const Tag10 =  ['Oolong','Oolong Tea']
const Tag11 = ['Pineapple','Pineapple Black']
const Tag12 = ['Strawberry','Strawberry Black']



  return (
    <div className='selectionbg'>
      <div className ='row'>
        <div className='Selection'>
          <div className='SelectionHeaders'>
            <h1 className='font-montserrat'>CLASSIC SELECTION</h1>
            <h2 className='font-montserrat'>Green Tea Collection</h2>
            <h3 className='font-montserrat'>Sweet Crisp Fragrances with Leafy Notes</h3>
          </div>
          <div className='SelectionItems'>
              <SelectionComponent  selectiontag ={Tag1}/>
              <SelectionComponent  selectiontag ={Tag2}/>
              <SelectionComponent  selectiontag ={Tag3}/>
              <SelectionComponent  selectiontag ={Tag4}/>
              <SelectionComponent  selectiontag ={Tag5}/>
              <SelectionComponent  selectiontag ={Tag6}/>
          </div>
        </div>
      </div>
      <div className ='row'>
        <div className='Selection'>
          <div className='SelectionHeaders'>
            <h2 className='font-montserrat'>Black Tea Collection</h2>
            <h3 className='font-montserrat'>Bold Classic Blends, Flavors that leave an Impact</h3>
          </div>
          <div className='SelectionItems'>
              <SelectionComponent  selectiontag ={Tag7}/>
              <SelectionComponent  selectiontag ={Tag8}/>
              <SelectionComponent  selectiontag ={Tag9}/>
              <SelectionComponent  selectiontag ={Tag10}/>
              <SelectionComponent  selectiontag ={Tag11}/>
              <SelectionComponent  selectiontag ={Tag12}/>
          </div>
        </div>
      </div>
        <Premium />
      <div className='teaguide'>
        <p className='font-montserrat'>If you're new to the tea hobby you might feel a bit overwhelmed with the variety of blends we offer, don't worry!</p>
        <p className='font-montserrat'>Each blend has detailed information available: snack pairings, temperature recommendations, caffeine levels, taste profiles, and aromatic profiles.</p>
        <p className='font-montserrat'>These guides are carefully crafted by our team of tea aficionados to make sure you enjoy every cup from steep to sip.</p>
      </div>
      <div className='guidelink'>
        <button onClick={handleClick} className='greenbutton font-montserrat'>GREEN TEA GUIDE</button>
        <div></div>
        <button onClick={handleClick} className='greenbutton font-montserrat'>BLACK TEA GUIDE</button>
      </div>
    </div>
  );
}
