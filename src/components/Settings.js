import React, { useState } from 'react';

function Settings() {
  const [pathologySettings, setPathologySettings] = useState({
    authorizedSignature: '',
    enteredBy: ''
  });
  const [radiologySettings, setRadiologySettings] = useState({
    authorizedSignature: '',
    enteredBy: ''
  });
  const [additionalLabDataEnabled, setAdditionalLabDataEnabled] = useState(false);
  const [showLabRemarks, setShowLabRemarks] = useState(false);

  const handlePathologySettingsChange = (event) => {
    const { name, value } = event.target;
    setPathologySettings(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRadiologySettingsChange = (event) => {
    const { name, value } = event.target;
    setRadiologySettings(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAdditionalLabDataEnabledChange = (event) => {
    setAdditionalLabDataEnabled(event.target.checked);
  };

  const handleShowLabRemarksChange = (event) => {
    setShowLabRemarks(event.target.checked);
  };

  return (
    <div>
      <h2>LIMS Settings</h2>
      <h3>Pathology Settings</h3>
      <form>
        <label className="label">
          Authorized Signature:
          <input type="text" name="authorizedSignature" value={pathologySettings.authorizedSignature} onChange={handlePathologySettingsChange} />
        </label>
        <br />
        <label className="label">
          Entered By:
          <input className="input"type="text" name="enteredBy" value={pathologySettings.enteredBy} onChange={handlePathologySettingsChange} />
        </label>
      </form>
      <h3>Radiology Settings</h3>
      <form>
        <label className="label">
          Authorized Signature:
          <input className="input"type="text" name="authorizedSignature" value={radiologySettings.authorizedSignature} onChange={handleRadiologySettingsChange} />
        </label>
        <br />
        <label className="label">
          Entered By:
          <input className="input"type="text" name="enteredBy" value={radiologySettings.enteredBy} onChange={handleRadiologySettingsChange} />
        </label>
      </form>
      <h3>Additional Lab Data</h3>
      <label className="label">
        <input className="input"type="checkbox" checked={additionalLabDataEnabled} onChange={handleAdditionalLabDataEnabledChange} />
        Enable additional lab data
      </label>
      <br />
      <label className="label">
        <input className="input"type="checkbox" checked={showLabRemarks} onChange={handleShowLabRemarksChange} />
        Show lab remarks
      </label>
    </div>
  );
}

export default Settings;
