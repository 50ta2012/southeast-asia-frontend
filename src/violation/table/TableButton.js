import 'bootstrap/dist/css/bootstrap.min.css';
import './TableButton.css';

export default function TableButton (props){
    const name = props.name;
   
    return <>
    <button type="button" className="btn btn-primary btn-option">{name}</button>
    </>
}

// const btoption = ["TEST","TEST2"];

// const data = btoption.map(function (btoptions) {
//  return  'a'+ btoption + 'b';
// });

// TableButton(data);