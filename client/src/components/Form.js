import {h} from 'preact';

export default ({onChange, onSubmit, value}) => (
  <div className="form">
    <input onChange={(e) => onChange(e.target.value)} value={value} />
    <button onClick={onSubmit}>Test!</button>
  </div>
);
