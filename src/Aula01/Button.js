import './button.css';

export function Button ({onClick, status})  
{
    return (
        <button onClick={onClick} className={`${status=='incremento' ? 'add' : 'dec'}`} >
            {
                status == 'incremento' ? (
                    <span>+</span>
                ):
                status=='reset' ? (
                    <span>Reset</span>
                ):
                (
                    <span>-</span>
                )
                
            }
        </button>
    )
}