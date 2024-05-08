import '../CSS/styles.css'
import '../CSS/fonts.css'

export default function SelectionComponent(props) {
  const selectionimg = props.selectiontag[0];
  const selectiontag = props.selectiontag[1]; 

  return (
    <div className={`Selection ${selectionimg}`}>
      <h2 className='seltag font-roboto'>{selectiontag}</h2>
      <div className="selimg"></div>
    </div>
  );
}
