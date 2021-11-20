import { React, useState } from 'react';
import { Box, Checkbox } from '@mui/material'
import Header from '../components/header/header'
import { useDispatch } from 'react-redux';
import { setAutoVideo, setAutoGif } from '../store/profile/action';





let setVideo = true;
let setGIF = true;

const ReduxComp = () => {
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');


    const dispatch = useDispatch();


    const setAutoVideoFn = () => {
        dispatch({ type: setAutoVideo });
        if (setVideo) {
            setText('Автоматически воспроизводить видео "Включено"');
        } else {
            setText('Автоматически воспроизводить видео "Выключено"');
        }
        setMessage('pop-up');
        setTimeout(() => setMessage('none'), 2000);
        setVideo = !setVideo;
    }

    const setAutoGifFn = () => {
        dispatch({ type: setAutoGif });
        if (setGIF) {
            setText('Автоматически воспроизводить GIF-анимации "Включено"');
        } else {
            setText('Автоматически воспроизводить GIF-анимации "Выключено"');
        }
        setMessage('pop-up');
        setTimeout(() => setMessage('none'), 2000);
        setGIF = !setGIF;
    }



    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='top'>
            <Header />
            <Box sx={{ position: 'reletive' }} className='container'>
                <Box className={message}>
                    <p>{text}</p>
                </Box>
                <h1 className='Profile-heading'>Profile</h1>
                <Box className='profile__box'>
                    <p className='profile__box_header'>Настройки контента</p>
                    <Box>
                        <label className='profile_checkbox'>
                            <Checkbox {...label}
                                onChange={() => setAutoVideoFn()}
                            />
                            <p className='profile_checkbox_name'>Автоматически воспроизводить видео
                            </p>

                        </label>
                        <label className='profile_checkbox'>
                            <Checkbox {...label}
                                onChange={() => setAutoGifFn()}
                            />
                            <p className='profile_checkbox_name'>Автоматически воспроизводить GIF-анимации
                            </p>
                        </label>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default function Profile() {

    return (
        <ReduxComp />
    )
}