import React, { useState } from 'react';
import { Alert, Nav, Table,Button, ButtonGroup, Dropdown, FormCheck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Avatar from 'react-avatar';

import './Sidebar.css';

const invoices = [
  { id: '#876364',imageurl:'name1.jpg', name: 'Arora Gaur', email: 'aroragaur@gmail.com', date: '12 Dec, 2828', status: 'Complete' },
  { id: '#872345',imageurl:'name2.jpg', name: 'Bethany Jackson', email: 'bethanyjackson@gmail.com', date: '10 Dec, 2828', status: 'Cancel' },
  { id: '#876123',imageurl:'name3.jpg', name: 'James Mullican', email: 'jamesmullican@gmail.com', date: '10 Dec, 2828', status: 'Pending' },
  { id: '#876213',imageurl:'name4.jpg', name: 'Robert Bacins', email: 'robertbacins@gmail.com', date: '09 Dec, 2828', status: 'Complete' },
  { id: '#871345',imageurl:'name5.jpg', name: 'Anne Jacob', email: 'annejacob@gmail.com', date: '10 Dec, 2828', status: 'Complete' },
  { id: '#872345',imageurl:'name6.jpg', name: 'Bethany Jackson', email: 'bethanyjackson@gmail.com', date: '10 Dec, 2828', status: 'Pending' },
  { id: '#873245',imageurl:'name7.jpg', name: 'Jhon Deo', email: 'jhondeo@gmail.com', date: '10 Dec, 2828', status: 'Complete' },
  { id: '#872347',imageurl:'name8.jpg', name: 'James Mullican', email: 'jamesmullican@gmail.com', date: '10 Dec, 2828', status: 'Cancel' },
];

const Sidebar = ({ onMenuClick }) => {
  const [selectedInvoices, setSelectedInvoices] = useState([]);

  const handleSelectInvoice = (id) => {
    setSelectedInvoices((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((invoiceId) => invoiceId !== id) : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedInvoices.length === invoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(invoices.map((invoice) => invoice.id));
    }
  };

  return (
    <div className="container-fluid bg-light mb-1">
      <div className="row ">
        <div className="col-md-2   bg-light">
          <div className=" p-1 bg-white sidebar">
            <div className="d-flex ms-4">
              <img src="Subtract.jpg" alt="Logo" width="30" height="30" className="me-2 mt-4" />
              <span className="fs-3 mt-3">Base</span>
            </div>
            <Nav >
              <Nav.Link onClick={() => onMenuClick('dashboard')} href="#" className="text-dark mt-1 ">
                <img src="Dashboard.png" alt="Logo"  width="22" height="22" />
                Dashboard
              </Nav.Link>
              <Nav.Link onClick={() => onMenuClick('analytics')} href="#" className="text-dark mt-1">
                <img src="Chart.jpg" alt="Logo"  width="22" height="22" />
                Analytics
              </Nav.Link>
              <Nav.Link onClick={() => onMenuClick('invoice')} href="#" className="text-dark mt-1">
                <img src="Ticket.jpg" alt="Logo" width="22" height="22"className='me-2' />
                Invoice
              </Nav.Link>
              <Nav.Link onClick={() => onMenuClick('schedule')} href="#" className="text-dark mt-1">
                <img src="Document.jpg" alt="Logo"  width="28" height="28" />
                Schedule
              </Nav.Link>
              <Nav.Link onClick={() => onMenuClick('calendar')} href="#" className="text-dark mt-1">
                <img src="Claender1.jpg" alt="Logo"  width="28" height="28" />
                Calendar
              </Nav.Link>
              <Nav.Link onClick={() => onMenuClick('messages')} href="#" className="text-dark mt-1">
                <img src="Massages.jpg" alt="Logo"  width="28" height="28" />
                Messages
              </Nav.Link>
              <Nav.Link onClick={() => onMenuClick('notification')} href="#" className="text-dark mt-1">
                <img src="Notification.jpg" alt="Logo"  width="28" height="28" />
                Notification
              </Nav.Link>
              <Nav.Link onClick={() => onMenuClick('settings')} href="#" className="text-dark mt-2">
                <img src="Setting.png" alt="Logo"  width="28" height="28" />
                Settings
              </Nav.Link>
            </Nav>
            <div className="mt-auto">
            <div className="d-flex ms-3">
                <img src="lanp.png" alt="Upgrade" width="110" height="120" className="me-4" />
              </div>
              <div className="d-flex align-items-center mb-4 ">
            <Button style={{ marginLeft: "7px" }}>Upgrade Now</Button>
          </div>

              <div className="d-flex align-items-center">
                <img src="Profile photo.jpg" alt="User" width="45" height="43" className="me-2 rounded-circle" />
                <div>
                  <strong>Easin Arafat</strong>
                  <small className="d-block text-muted ms-1">Free Account </small>
                            
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9 mt-4">
          <div className="p-1 bg-light">
          <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <h4 className="invoice-brand fs-2 fw-medium">Invoice List</h4>
                <form className="d-flex" role="search">
                  <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="text-bg-primary border-0 rounded-5 ps-4 pe-4 " type="submit">+AddNew</button>
                </form>
              </div>
            </nav>
            <Table hover className="table-custom-gap ">
              <thead>
                <tr>
                  <th><FormCheck type="checkbox"checked={selectedInvoices.length === invoices.length}onChange={handleSelectAll}/></th>
                  <th className=' fw-normal'>Invoice Id<img src='Arrow.jpg'alt='down' className='m-1'/></th>
                  <th className='text-start fw-normal'>Name<img src='Arrow.jpg'alt='down' className='m-1'/></th>
                  <th className='text-start fw-normal '>Email<img src='Arrow.jpg'alt='down' className='m-1'/></th>
                  <th className='text-start fw-normal'>Date<img src='Arrow.jpg'alt='down' className='m-1'/></th>
                  <th className='text-start fw-normal'>Status<img src='Arrow.jpg'alt='down' className='m-1 '/></th>
                  <th></th>
                  <th><img src='Delete.jpg' alt=''/></th>
                  
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className={selectedInvoices.includes(invoice.id) ? 'table-active' : ''}>
                    <td><FormCheck type="checkbox"checked={selectedInvoices.includes(invoice.id)}onChange={() => handleSelectInvoice(invoice.id)}/></td>
                    <td>{invoice.id}</td>
                    <td className='text-start'><Avatar src={invoice.imageurl} size="35" round={true} className="me-2" />
                      {invoice.name}
                    </td>
                    <td className='text-start ms-3'>
                      <img src="Message.jpg" alt="Message" className="me-1" />
                      {invoice.email}
                    </td>
                    <td>
                      <img src="Calendar.jpg" alt="Calendar" className="me-1" />
                      {invoice.date}
                    </td>
                    <td>
                      <Alert className='rounded-pill' variant={
                        invoice.status === 'Complete' ? 'alert alert-success p-1' : 
                        invoice.status === 'Pending' ? 'alert alert-warning p-1' :
                        'alert alert-danger p-1'
                      }>
                        {invoice.status}
                      </Alert>
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faStar} color="gold" />
                    </td>
                    <td>
                      <ButtonGroup>
                        <Dropdown>
                          <Dropdown.Toggle variant="link" bsPrefix="p-0">
                            <FontAwesomeIcon icon={faEllipsisH} />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item className='text-primary'>Edit</Dropdown.Item>
                            <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

