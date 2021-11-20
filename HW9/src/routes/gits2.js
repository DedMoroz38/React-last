import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import Header from '../components/header/header';
import { useSelector, useDispatch } from 'react-redux';
import { selectGistsError, selectGistsLoading, selectGistsData } from '../store/gits/selectors'
import { getAllGists } from '../store/gits/getter';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



var city = 'Europe/Moscow';
export const GistsList = () => {

    const handleChange = (event) => {
        city = event.target.value;
        requestGists()
    };

    const dispatch = useDispatch();

    const gists = useSelector(selectGistsData);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists(city));
    };

    useEffect(() => {
        requestGists();
    }, []);

    if (loading) {
        return (
            <div className='top'>
                <Header />
                <div className='container-progres'>
                    <CircularProgress />
                </div>
            </div>
        )
    }
    if (error) {
        return (
            <div className='top'>
                <Header />
                <div className='container-progres'>
                    <h3>Error: {error}</h3>
                    <button onClick={requestGists}>Retry</button>
                </div>
            </div>
        );
    }
    return <div className="top">
        <Header />
        <div className="gits-container">
            <div className='gits-box'>
                <Box sx={{ width: 150, }}>
                    <FormControl fullWidth sx={{ marginTop: '5px' }}>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            sx={{ backgroundColor: 'rgb(84, 207, 207)' }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city}
                            label="City"
                            onChange={handleChange}
                        >
                            <MenuItem sx={{ color: 'rgb(226, 98, 209)' }} value={'Europe/Moscow'}>Moscow</MenuItem>
                            <MenuItem sx={{ color: 'rgb(226, 98, 209)' }} value={'America/New_York'}>New York</MenuItem>
                            <MenuItem sx={{ color: 'rgb(226, 98, 209)' }} value={'Europe/London'}>London</MenuItem>
                            <MenuItem sx={{ color: 'rgb(226, 98, 209)' }} value={'Europe/Paris'}>Paris</MenuItem>
                            <MenuItem sx={{ color: 'rgb(226, 98, 209)' }} value={'Europe/Ulyanovsk'}>Ulyanovsk</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <ul className='date-list'>
                    <li >Дата: {gists.date}</li>
                    <li >Время: {gists.time}</li>
                    <li >День недели: {gists.dayOfWeek}</li>
                </ul>
            </div>
        </div>

    </div>
};

