export const MessagesListPresentational = (props) => {
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
                    autoFocus
                    placeholder='Сообщение...'
                    onChange={props.NewMessageFc}
                ></input>
                <button onClick={props.AddMessage}>
                    <img src={props.img} alt='send' />
                </button>
            </div>
        </div>
    );
}