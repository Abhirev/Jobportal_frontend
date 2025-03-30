import React, { useState } from 'react';
import { addJob } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const [job, setJob] = useState({
    postTitle: '',
    postDesc: '',
    reqExperience: '',
    salary: '',
    companyName: '',
    location: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addJob(job);
      navigate('/');
    } catch (error) {
      console.error('Error adding job', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input type="text" className="form-control" name="postTitle" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input type="text" className="form-control" name="postDesc" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Experience (years)</label>
          <input type="number" className="form-control" name="reqExperience" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input type="number" className="form-control" name="salary" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input type="text" className="form-control" name="companyName" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input type="text" className="form-control" name="location" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;
