import React from 'react';

function LabList(props) {
  const { labTests } = props;

  return (
    <div className="lab-test-list">
      <table>
        <thead>
          <tr>
            <th>Test ID</th>
            <th>Customer Name</th>
            <th>Lab Test Name</th>
            <th>Ordered On</th>
            <th>Collected On</th>
            <th>Status</th>
            <th>Turnaround Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {labTests?.map((labTest) => (
            <tr key={labTest.id}>
              <td>{labTest.id}</td>
              <td>{labTest.customerName}</td>
              <td>{labTest.labTestName}</td>
              <td>{labTest.orderedOn}</td>
              <td>{labTest.collectedOn}</td>
              <td>{labTest.status}</td>
              <td>{labTest.turnaroundTime}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Import CSV</button>
    </div>
  );
}

export default LabList;
