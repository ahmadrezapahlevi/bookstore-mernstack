import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:4000/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
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

  const boxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid #38bdf8', // sky-400
    borderRadius: '12px',
    width: '600px',
    padding: '32px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '28px',
    margin: '16px 0',
  };

  const confirmTextStyle = {
    fontSize: '24px',
    marginBottom: '32px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '16px',
    backgroundColor: '#dc2626', // red-600
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <BackButton />
      <h1 style={headingStyle}>Delete Book</h1>
      {loading ? <Spinner /> : null}
      <div style={boxStyle}>
        <h3 style={confirmTextStyle}>Are You Sure You want to delete this book?</h3>
        <button style={buttonStyle} onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;