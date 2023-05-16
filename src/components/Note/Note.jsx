import {MdDelete} from 'react-icons/md';
import './Note.css';

const Note =({id,text,date,handleDeleteNote})=>{
    return(
        <div className="note">
            <spam>{text}</spam>
            <div className="note-footer">
                <small>{date}</small>
                <MdDelete className='delete-icon' size='1.3em' onClick={()=>handleDeleteNote(id)}/>
            </div>
        </div>
    )
}

export default Note;