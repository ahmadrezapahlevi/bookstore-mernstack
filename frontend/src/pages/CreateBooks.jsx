import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:4000/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  const containerStyle = {
    padding: '16px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #38bdf8', // sky-400 color
    borderRadius: '12px',
    width: '600px',
    padding: '16px',
    margin: '0 auto',
  };

  const fieldWrapperStyle = {
    margin: '16px 0',
  };

  const labelStyle = {
    fontSize: '20px',
    marginRight: '16px',
    color: '#6b7280', // gray-500
  };

  const inputStyle = {
    border: '2px solid #6b7280',
    padding: '8px 16px',
    width: '100%',
    fontSize: '16px',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#7dd3fc', // sky-300
    margin: '32px 0 0 0',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '6px',
  };

  const headingStyle = {
    fontSize: '28px',
    margin: '16px 0',
  };

  return (
    <div style={containerStyle}>
      <BackButton />
      <h1 style={headingStyle}>Create Book</h1>
      {loading ? <Spinner /> : null}
      <div style={formStyle}>
        <div style={fieldWrapperStyle}>
          <label style={labelStyle}>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={fieldWrapperStyle}>
          <label style={labelStyle}>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={fieldWrapperStyle}>
          <label style={labelStyle}>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button style={buttonStyle} onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;