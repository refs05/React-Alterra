import './content.css';

function Completed({title}) {
    return (
        <div className="Completed">{title}</div>
    );
}

function UnComplete({title}) {
    return (
        <div className="UnComplete">{title}</div>
    )
}

function Content({title, status}) {
    let check = status;
    if (status) {
        return <Completed title={title}/>;
    } 
    return <UnComplete title={title}/>
}

export default Content;