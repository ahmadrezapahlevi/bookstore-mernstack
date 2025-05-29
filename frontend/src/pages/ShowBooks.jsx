import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const containerStyle = {
    padding: '16px',
  };

  const headingStyle = {
    fontSize: '28px',
    margin: '16px 0',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #38bdf8', // sky-400
    borderRadius: '12px',
    width: 'fit-content',
    padding: '16px',
  };

  const rowStyle = {
    margin: '16px 0',
    display: 'flex',
    alignItems: 'center',
  };

  const labelStyle = {
    fontSize: '20px',
    marginRight: '16px',
    color: '#6b7280', // gray-500
    minWidth: '150px',
    fontWeight: '500',
  };

  const valueStyle = {
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <BackButton />
      <h1 style={headingStyle}>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div style={cardStyle}>
          <div style={rowStyle}>
            <span style={labelStyle}>Id</span>
            <span style={valueStyle}>{book._id}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Title</span>
            <span style={valueStyle}>{book.title}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Author</span>
            <span style={valueStyle}>{book.author}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Publish Year</span>
            <span style={valueStyle}>{book.publishYear}</span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Create Time</span>
            <span style={valueStyle}>
              {book.createdAt ? new Date(book.createdAt).toString() : ''}
            </span>
          </div>
          <div style={rowStyle}>
            <span style={labelStyle}>Last Update Time</span>
            <span style={valueStyle}>
              {book.updatedAt ? new Date(book.updatedAt).toString() : ''}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;