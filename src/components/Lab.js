import React, { useState } from 'react';

function Lab() {
  const [labStatus, setLabStatus] = useState('all');
  const [client, setClient] = useState('');
  const [orderedBy, setOrderedBy] = useState('');
  const [referrer, setReferrer] = useState('');
  const [test, setTest] = useState('');
  const [sampleTaken, setSampleTaken] = useState(false);
  const [sampleTime, setSampleTime] = useState('');
  const [remarks, setRemarks] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [createLabTest, setCreateLabTest] = useState(false);

  const handleLabStatusChange = (status) => {
    setLabStatus(status);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClientChange = (event) => {
    setClient(event.target.value);
  };

  const handleOrderedByChange = (event) => {
    setOrderedBy(event.target.value);
  };

  const handleReferrerChange = (event) => {
    setReferrer(event.target.value);
  };

  const handleTestChange = (event) => {
    setTest(event.target.value);
  };

  const handleSampleTakenChange = (event) => {
    setSampleTaken(event.target.checked);
  };

  const handleSampleTimeChange = (event) => {
    setSampleTime(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handleCreateLabTest = () => {
    setCreateLabTest(true);
  };

  const handleCancel = () => {
    setCreateLabTest(false);
  };

  const handleSave = () => {
    // Logic to save the new lab test
    setCreateLabTest(false);
  };

  const testOptions = ['Test 1', 'Test 2', 'Test 3'];

  return (
    <div className="Lab">
      <h1>Lab Information Management System</h1>
      <div className="lab-status">
        <h2>Lab Status</h2>
        <button onClick={() => handleLabStatusChange('all')} className={labStatus === 'all' ? 'active' : ''}>
          All
        </button>
        <button onClick={() => handleLabStatusChange('ordered')} className={labStatus === 'ordered' ? 'active' : ''}>
          Ordered
        </button>
        <button
          onClick={() => handleLabStatusChange('sample-taken')}
          className={labStatus === 'sample-taken' ? 'active' : ''}
        >
          Sample Taken
        </button>
        <button
          onClick={() => handleLabStatusChange('incomplete-result')}
          className={labStatus === 'incomplete-result' ? 'active' : ''}
        >
          Incomplete Result
        </button>
        <button
          onClick={() => handleLabStatusChange('result-ready')}
          className={labStatus === 'result-ready' ? 'active' : ''}
        >
          Result Ready
        </button>
        <button onClick={() => handleLabStatusChange('canceled')} className={labStatus === 'canceled' ? 'active' : ''}>
          Canceled
        </button>
      </div>
      <div className="lab-search">
        <input
          type="text"
          placeholder="Search by"
          value={searchTerm}
onChange={handleSearch}
/>
</div>
<div className="lab-table">
{/* Code for rendering the lab test table */}
</div>
{createLabTest ? (
<div className="create-lab-test">
<h2>Create New Lab Test</h2>
<form>
<label>
Client:
<input type="text" value={client} onChange={handleClientChange} />
</label>
<label>
Ordered By:
<input type="text" value={orderedBy} onChange={handleOrderedByChange} />
</label>
<label>
Referrer:
<input type="text" value={referrer} onChange={handleReferrerChange} />
</label>
<label>
Test:
<select value={test} onChange={handleTestChange}>
{testOptions.map((option) => (
<option key={option} value={option}>
{option}
</option>
))}
</select>
</label>
<label>
Sample Taken:
<input type="checkbox" checked={sampleTaken} onChange={handleSampleTakenChange} />
</label>
<label>
Sample Time:
<input type="datetime-local" value={sampleTime} onChange={handleSampleTimeChange} />
</label>
<label>
Remarks:
<textarea value={remarks} onChange={handleRemarksChange} />
</label>
</form>
<div className="buttons">
<button onClick={handleSave}>Save</button>
<button onClick={handleCancel}>Cancel</button>
</div>
</div>
) : (
<button onClick={handleCreateLabTest}>Create New Lab Test</button>
)}
</div>
);
}

export default Lab;
