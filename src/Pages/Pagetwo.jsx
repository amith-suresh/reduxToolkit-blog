import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submit } from '../Features/Blogslice';
import { useNavigate } from 'react-router-dom';

function Pagetwo() {
    const [title, setTitle] = useState('');  
    const [blog, setBlog] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (title && blog) {
            dispatch(submit({ title, blog }));
            navigate('/pagethree');
        } else {
            alert('Both title and blog content are required');
        }
    };

    return (
        <>
            <h1>Page 2</h1>
            <input
                type='text'
                placeholder='Add title'
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input
                type='text'
                placeholder='Add blog'
                value={blog}
                onChange={(e) => setBlog(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Pagetwo;
