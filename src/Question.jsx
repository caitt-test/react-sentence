import React from 'react';

import './Question.css';

export default ({ label, value, onChange }) => <div className="question">
    <label>{label}<input type="text" value={value} onChange={onChange}/></label>
</div>;