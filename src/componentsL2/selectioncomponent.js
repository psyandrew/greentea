import '../CSS/styles.css'
import '../CSS/fonts.css'

export default function SelectionComponent(props) {
  const selectionimg = props.selectiontag[0];
  const selectiontag = props.selectiontag[1]; 

  return (
    <span className={`Selection ${selectionimg}`}>
      <h1 className='seltag font-montserrat'>{selectiontag}</h1>
      <span className="selimg"></span>
    </span>
  );
}
