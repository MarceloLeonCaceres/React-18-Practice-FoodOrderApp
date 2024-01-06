export default function Input({ label, id, error, ...props}){
    return (
        <div className="control-row">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
            <div>
                {error & <p>{error}</p>}
            </div>
        </div>
    );
}