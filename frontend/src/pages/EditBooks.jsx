import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:4000/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
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

  const headingStyle = {
    fontSize: '28px',
    margin: '16px 0',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #38bdf8', // sky-400
    borderRadius: '12px',
    width: '600px',
    padding: '16px',
    margin: '0 auto',
  };

  const formGroupStyle = {
    margin: '16px 0',
  };

  const labelStyle = {
    fontSize: '20px',
    marginRight: '16px',
    color: '#6b7280', // gray-500
    display: 'inline-block',
    marginBottom: '6px',
  };

  const inputStyle = {
    border: '2px solid #6b7280', // gray-500
    padding: '8px 16px',
    width: '100%',
    borderRadius: '6px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '8px',
    backgroundColor: '#38bdf8', // sky-300
    margin: '32px 0 0 0',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '18px',
    color: 'black',
  };

  return (
    <div style={containerStyle}>
      <BackButton />
      <h1 style={headingStyle}>Edit Book</h1>
      {loading ? <Spinner /> : null}
      <div style={formStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            style={inputStyle}
          />
        </div>
        <button style={buttonStyle} onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;