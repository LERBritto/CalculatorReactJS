import './ZeroButton.css'

export function ZeroButton({ color, background, onClick, text }) {
    return (
        <button
            className='zeroButton'
            style={{ color: color, background: background }}
            onClick={onClick}>
            {text}
        </button>
    );
}