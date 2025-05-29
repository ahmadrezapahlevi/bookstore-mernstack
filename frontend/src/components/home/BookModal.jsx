import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  const overlayStyle = {
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.6)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalStyle = {
    width: '600px',
    maxWidth: '100%',
    height: '400px',
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  const closeIconStyle = {
    position: 'absolute',
    right: '24px',
    top: '24px',
    fontSize: '24px',
    color: '#dc2626', // red-600
    cursor: 'pointer',
  };

  const yearBadgeStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: '#fecaca', // red-300
    borderRadius: '12px',
    width: 'fit-content',
    marginBottom: '8px',
  };

  const idStyle = {
    margin: '8px 0',
    color: '#6b7280', // gray-500
  };

  const infoRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
  };

  const iconStyle = {
    color: '#fecaca', // red-300
    fontSize: '20px',
  };

  const titleAuthorStyle = {
    margin: '4px 0',
  };

  const paragraphStyle = {
    marginTop: '16px',
    lineHeight: 1.5,
  };

  const smallParagraphStyle = {
    margin: '8px 0',
    lineHeight: 1.5,
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <AiOutlineClose style={closeIconStyle} onClick={onClose} />
        <h2 style={yearBadgeStyle}>{book.publishYear}</h2>
        <h4 style={idStyle}>{book._id}</h4>
        <div style={infoRowStyle}>
          <PiBookOpenTextLight style={iconStyle} />
          <h2 style={titleAuthorStyle}>{book.title}</h2>
        </div>
        <div style={infoRowStyle}>
          <BiUserCircle style={iconStyle} />
          <h2 style={titleAuthorStyle}>{book.author}</h2>
        </div>
        <p style={paragraphStyle}>Anything You want to show</p>
        <p style={smallParagraphStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
          voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
          necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
          nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
          dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
          vitae voluptate sequi repellat!
        </p>
      </div>
    </div>
  );
};

export default BookModal;