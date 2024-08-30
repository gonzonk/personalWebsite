import './Main.css'
import resume from '../assets/resume.pdf'

function ResumePage(props){
    return (
        <>
            <h1>Resume:</h1>
            <a href={resume} download='GonzaloEsparzasResume'>Download Here</a>
        </>
    )
}

export default ResumePage;