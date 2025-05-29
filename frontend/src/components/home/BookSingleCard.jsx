import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const cardStyle = {
    border: '2px solid gray',
    borderRadius: '12px',
    padding: '8px 16px',
    margin: '16px',
    position: 'relative',
    boxShadow: 'none',
    transition: 'box-shadow 0.3s ease',
    cursor: 'default',
  };

  const cardHoverStyle = {
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  };

  const publishYearStyle = {
    position: 'absolute',
    top: '4px',
    right: '8px',
    padding: '4px 12px',
    backgroundColor: '#fecaca', // red-300
    borderRadius: '12px',
    fontWeight: 'bold',
  };

  const idStyle = {
    margin: '8px 0',
    color: '#6b7280', // gray-500
  };

  const infoRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '4px 0',
  };

  const iconStyleRed = {
    color: '#fecaca', // red-300
    fontSize: '24px',
  };

  const actionRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    marginTop: '16px',
    padding: '16px',
  };

  const iconActionStyle = {
    fontSize: '28px',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  // To handle hover effect on card, we can use state, but here simplified without hover effects on card container.

  return (
    <div style={cardStyle}>
      <h2 style={publishYearStyle}>{book.publishYear}</h2>
      <h4 style={idStyle}>{book._id}</h4>
      <div style={infoRowStyle}>
        <PiBookOpenTextLight style={iconStyleRed} />
        <h2 style={{ margin: '4px 0' }}>{book.title}</h2>
      </div>
      <div style={infoRowStyle}>
        <BiUserCircle style={iconStyleRed} />
        <h2 style={{ margin: '4px 0' }}>{book.author}</h2>
      </div>
      <div style={actionRowStyle}>
        <BiShow
          style={{ ...iconActionStyle, color: '#1e40af' }} // blue-800
          onClick={() => setShowModal(true)}
          onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
          onMouseOut={(e) => (e.currentTarget.style.color = '#1e40af')}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle
            style={{ ...iconActionStyle, color: '#166534' }} // green-800
            onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#166534')}
          />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit
            style={{ ...iconActionStyle, color: '#ca8a04' }} // yellow-600
            onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#ca8a04')}
          />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete
            style={{ ...iconActionStyle, color: '#dc2626' }} // red-600
            onMouseOver={(e) => (e.currentTarget.style.color = 'black')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#dc2626')}
          />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;