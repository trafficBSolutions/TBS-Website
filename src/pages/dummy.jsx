import React, { useState } from 'react';
import '../css/apply.css'
import FileInput from '../components/FileInput';
import axios from 'axios'

export default function Apply() {
 const [data, setData] = useState({
  first: '',
  last: '',
  email: '',
  phone: '',
  resume: null, // Using null instead of an empty string
  cover: null, // Using null instead of an empty string
  message: ''
 })

 const UserApplied = (e) => {
  e.preventDefault()
  // You can send file data using FormData
  const formData = new FormData();
  formData.append('resume', data.resume);
  formData.append('cover', data.cover);
  // Add other form fields to formData
  // Then send formData using axios or any other method
 }

 return (
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="stylesheet" href="/index.css"/>
    </head>
    <body>

      {/* Your HTML code here */}
      
      <form className="apply-set -- box" id="applicationForm" onSubmit={UserApplied}>
        {/* Your form fields */}
        <div className="resume-input">
          <div className="resume">
            <div className="name-input">
              <label className="resume-name">Resume *</label>
              {/* Use type="file" input for file selection */}
              <input type="file" className="file-input" onChange={(e) => setData({...data, resume: e.target.files[0]})} />
            </div>
          </div>   

          <div className="cover-letter">
            <div className="name-input">
              <label className="cover-name">Cover Letter</label>
              <input type="file" className="file-input" onChange={(e) => setData({...data, cover: e.target.files[0]})} />
            </div>
          </div>    
        </div>
        {/* Other form fields */}
        <button type="submit" className="btn btn--full submit-app">Submit Application</button>
      </form>

      {/* Your remaining HTML code */}
      
    </body>
  </html>
 )
}
