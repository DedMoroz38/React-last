import { useRef } from 'react';


export const MessagesListPresentational = (props) => {
    const inputEl = useRef(null);

    const inputUpdate = () => {
        inputEl.current.value = '';
        inputEl.current.focus();
        props.AddMessage();
    }
    return (
        <div className='message-box'>
            <div className='message-name'>
                <h3>Name</h3>
            </div>
            <div className='message-area'>
                {props.messageList.map((item) => (
                    <div key={item.key}>
                        <p className='AuthorName'>{item.authorName}</p>
                        <p>{item.message}</p>
                    </div>
                ))}
            </div>
            <div className='message-send'>
                <input
                    ref={inputEl}
                    autoFocus
                    placeholder='Сообщение...'
                    onChange={props.NewMessageFc}
                    type="text"
                ></input>
                <button onClick={inputUpdate}>
                    <img src={props.img} alt='send' />
                </button>
            </div>
        </div>
    );
}

