// import React from 'react'
// import { Badge,Table ,ButtonGroup,Dropdown } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar,faEllipsisH } from '@fortawesome/free-solid-svg-icons';
// import Avatar from 'react-avatar';

// const invoices = [
//     { id: '#876364', name: 'Arora Gaur', email: 'aroragaur@gmail.com', date: '12 Dec, 2020', status: 'Complete',},
  
//     { id: '#876123', name: 'James Mullican',  email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'Pending' },
//     { id: '#876213', name: 'Robert Bacins',   email: 'robertbacins@gmail.com', date: '09 Dec, 2020', status: 'Complete' },
//     { id: '#876987', name: 'Bethany Jackson', email: 'bethanyjackson@gmail.com', date: '09 Dec, 2020', status: 'Cancel' },
//     { id: '#871345', name: 'Anne Jacob',      email: 'annejacob@gmail.com', date: '10 Dec, 2020', status: 'Complete' },
//     { id: '#872345', name: 'Bethany Jackson', email: 'bethanyjackson@gmail.com', date: '10 Dec, 2020', status: 'Pending' },
//     { id: '#872346', name: 'James Mullican',  email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'Complete' },
//     { id: '#873245', name: 'Jhon Deo',        email: 'jhondeo@gmail.com', date: '10 Dec, 2020', status: 'Complete' },
//     { id: '#872347', name: 'James Mullican',  email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'Cancel' },
//     { id: '#878769', name: 'James Mullican',  email: 'jamesmullican@gmail.com', date: '10 Dec, 2020', status: 'Pending' },
//   ];
  
// function Invoice() {
//   return (
//     <div className="col-md-9 mt-3">
//     <div className="p-1 bg-light" >
//     <h3>Invoice</h3>
//       <Table>
//         <thead>
//           <tr>
//             <th><input type="checkbox" /> Invoice id</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Date</th>
//             <th>Status</th>
//             <th><img src="Delete.jpg" alt="" /></th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoices.map((invoice, index) => (
//             <tr key={index}>
//               <td><input type="checkbox" /> {invoice.id}</td>
//               <td><Avatar name={invoice.name} size="30" round={true} className="me-2" />{invoice.name}</td>
//               <td><img src="Message.jpg" alt="" />{invoice.email}</td>
//               <td><img src="Calendar.jpg" alt="" />{invoice.date}</td>
                                                
//               <td>
//                 <Badge bg={
//                   invoice.status === 'Complete' ? 'success' :
//                   invoice.status === 'Pending' ? 'warning' :
//                   'danger'
//                 }>
//                   {invoice.status}
//                 </Badge>
//               </td>
              
//               <td><FontAwesomeIcon icon={faStar} color="gold" /></td>
             
//               <td>
//                 <ButtonGroup>
//                   <Dropdown>
//                     <Dropdown.Toggle variant="link" bsPrefix="p-0">
//                       <FontAwesomeIcon icon={faEllipsisH} />
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       <Dropdown.Item>Edit</Dropdown.Item>
//                       <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </ButtonGroup>
//               </td>
            

//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   </div>
//   )
// }

// export default Invoice