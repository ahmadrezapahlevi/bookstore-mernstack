import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  const containerStyle = {
    display: 'flex',
  };

  const linkStyle = {
    backgroundColor: '#0369a1', // sky-800
    color: 'white',
    padding: '4px 16px',
    borderRadius: '12px',
    width: 'fit-content',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    fontSize: '24px',
  };

  return (
    <div style={containerStyle}>
      <Link to={destination} style={linkStyle}>
        <BsArrowLeft style={iconStyle} />
      </Link>
    </div>
  );
};

export default BackButton;