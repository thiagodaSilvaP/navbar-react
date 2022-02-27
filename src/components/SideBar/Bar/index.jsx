import './style.css'

export const Bar = ({title, icon}) => {
    return (
        <div className="bar">
            <div className="icon-bar">{icon}</div>
            <h1 className="bar-title">{title}</h1>
        </div>
    )
};
