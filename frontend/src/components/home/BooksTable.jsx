import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '8px',
  };

  const thStyle = {
    border: '1px solid #64748b', // slate-600
    borderRadius: '6px',
    padding: '6px',
    textAlign: 'center',
  };

  const tdStyle = {
    border: '1px solid #475569', // slate-700
    borderRadius: '6px',
    padding: '6px',
    textAlign: 'center',
  };

  const operationsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>No</th>
          <th style={thStyle}>Title</th>
          <th style={{ ...thStyle, display: 'table-cell' /* hide on small if needed */ }}>
            Author
          </th>
          <th style={{ ...thStyle, display: 'table-cell' /* hide on small if needed */ }}>
            Publish Year
          </th>
          <th style={thStyle}>Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} style={{ height: '32px' }}>
            <td style={tdStyle}>{index + 1}</td>
            <td style={tdStyle}>{book.title}</td>
            <td style={{ ...tdStyle, display: 'table-cell' }}>{book.author}</td>
            <td style={{ ...tdStyle, display: 'table-cell' }}>{book.publishYear}</td>
            <td style={tdStyle}>
              <div style={operationsStyle}>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle style={{ fontSize: '24px', color: '#166534' }} />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit style={{ fontSize: '24px', color: '#ca8a04' }} />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete style={{ fontSize: '24px', color: '#b91c1c' }} />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;