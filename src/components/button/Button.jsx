import './button.css'

export function Button({ color, background, onClick, text }) {
    return (
        <button
            className='button'
            style={{ color: color, background: background }}
            onClick={onClick}>
            {text}
        </button>
    );
}