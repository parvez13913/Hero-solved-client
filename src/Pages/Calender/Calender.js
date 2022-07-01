import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    const { id } = useParams();
    const SelectedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const navigate = useNavigate();

    const data = {
        date: SelectedDate
    }

    const updateDate = id => {
        const url = `http://localhost:5000/calender/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    navigate('/');
                }
            });
    }
    return (
        <div>
            <h4 className='my-3 text-center'>Update Date</h4>
            <div className='d-flex justify-content-center my-5'>
                <DayPicker
                    className='border p-2'
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
            <p className='d-flex justify-content-center'>Selected: {format(date, "PP")}</p>
            <div className='d-flex justify-content-center mb-3'>
                <Button onClick={() => updateDate(id)} variant="outline-success">Update Date</Button>
            </div>
        </div>
    );
};

export default Calender;