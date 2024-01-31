import React, { useState } from 'react';
import '../css/apply.css';
import FileInput from '../components/FileInput'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Apply() {
  const navigate = useNavigate()
  const [data, formData] = useState({
    first: '',
    last: '',
    email: '',
    phone: '',
    resume: '',
    cover: '',
    message: ''
  });
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [submissionErrorMessage, setSubmissionErrorMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  const { first, last, email, phone, resume, cover, message } = data;
  try {
    const response = await axios.post('/applynow', {
      first, last, email, phone, resume, cover, message
    });
    // Check if response has error
    if (response.data.error) {
      // Set submissionErrorMessage state to display the error message
      setSubmissionErrorMessage(response.data.error);
    } else {
      // If no error, clear form data and display success message
      formData({
        first: '',
        last: '',
        email: '',
        resume: '',
        cover: '',
        phone: '',
        message: ''
      });
      setSubmissionMessage('Application Submitted! We will be with you within 48 hours!');
      toast.success('Application Submitted! We will be with you within 48 hours!');
      navigate('/applynow');
    }
  } catch (error) {
    console.log(error);
  }
};
    return (
      <div>
          
            <header className="header">
      <a href="/">
        <img className="logo" alt="TBS logo" src="tbs logo.png" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="http://www.msn.com">Traffic Control</a></li>
          <li><a className="main-nav-link" href="#how">Clothing and Bags</a></li>
          <li>
            <a className="main-nav-link" href="#how">Banners and Posters</a>
          </li>
          <li><a className="main-nav-link" href="#how">Business Cards</a></li>
          <li><a className="main-nav-link" href="#how">Window Vinyls</a></li>
          <li><a className="main-nav-link" href="#meals">Items</a></li>
          <li>
            <a className="main-nav-link" href="#testimonials">Signs</a>
          </li>
          <li><a className="main-nav-link" href="#pricing">Pricing</a></li>
          <li>
            <a className="main-nav-link nav-cta" href="#cta">Get a free quote</a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
        
        <main>
        <div className="apply-container">
          <h1 className="apply-now">APPLY NOW</h1>
          <h2 className="descript">Discover a career with TBS, 
          a premier leader in traffic control solutions! 
          As a dynamic and rapidly growing company in the traffic management industry, 
          TBS takes pride in revolutionizing how we navigate and manage traffic flow. 
          Join our dedicated team and contribute to creating safer, 
          more efficient roadways.</h2>
        </div>
        <form className="apply-set -- box" id="applicationForm" onSubmit={handleSubmit}>
          <div className="container container--narrow page-section">

          <h1 className="job-app-box">Job Application Form</h1>
          <h2 className="job-fill">Please Fill Out the Form Below to Submit Your Job Application!</h2>
            
            
          <label className="name">Name: </label>
        <div className="first-input">
        
          <div className="first-name">
              <div className="name-input">
                <label className="first-label-name">First Name *</label>
                  <input name="first" type="text" className="first-name-input"text="first-name--input" placeholder="Enter First Name" 
                 value={data.first} onChange={(e) => formData({...data, first: e.target.value})} required />
              </div>
              </div>
            <div className="last-name">
              <div className="name-input"> 
            <label className="last-label-name">Last Name *</label>
              <input name="last" type="text"className="last-name-input"text="last-name--input" placeholder="Enter Last Name"
              value={data.last} onChange={(e) => formData({...data, last: e.target.value})}required />
              </div>
            </div>
            </div>
            <label className="emailphone-label">Email/Phone Number:</label>
            
            <div className="emailphone-input">
            
            <div className="email">
            <div className="name-input">
            <label className="email-name">Email *</label>
              <input name="email" type="text" className="email-box"text="email--input" placeholder="Enter Email"
              value={data.email} onChange={(e) => formData({...data, email: e.target.value})} required />
              </div> 
              </div>
              
            <div className="phone">
            <div className="name-input">
            <label className="phone">Phone Number *</label>
              <input name="phone" type="text" className="phone-box"text="phone--input" placeholder="Enter Phone Number"
              value={data.phone} onChange={(e) => formData({...data, phone: e.target.value})}required />
              </div>
              </div>  
              </div>  

            <label className="resume-label">Resume/Cover Letter:</label>
              <h1 className="resume-note">Note: You can only submit .doc, .pdf, .txt, and .pages files</h1>
              <div className="resume-input">
        <div className="resume">
          <div className="name-input">
            <label htmlFor="resume" className="resume-name">Resume *</label>
            <div className="file-input-container">
              <label className="file-label"></label>
              <FileInput
                type="file"
                id="resume"
                className="fileInput"
                accept=".pdf,.doc,.docx,.txt,.pages" 
                value={data.resume} onChange={(e) => formData({...data, resume: e.target.files[0]})}required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cover-letter">
        <div className="name-input">
          <label className="cover-name">Cover Letter</label>
          <div className="file-input-container">
            <label className="file-label"></label>
            <FileInput
              type="file"
              id="coverLetter"
              className="fileInput"
              accept=".pdf,.doc,.docx,.txt,.pages"
              value={data.cover} onChange={(e) => formData({...data, cover: e.target.files[0]})} />
          
          </div>
        </div>
      </div>
            <label className="message-label">Message: </label>
            <h1 className="message-note">Tell us why you want to work for TBS! </h1>
   
                <textarea className="message-text" name="message" type="text" placeholder="Enter Message"
                value={data.message} onChange={(e) => formData({...data, message: e.target.value})}required />
                  <button type="submit" className="btn btn--full submit-app">Submit Application</button>
          </div>
          {submissionErrorMessage && (
            <div className="submission-error-message">{submissionErrorMessage}</div>
          )}
          {submissionMessage && (
          <div className="submission-message">{submissionMessage}</div>
         )}
         </form>
         
         </main>
         <footer className="footer">
                  <div className="site-footer__inner container container--narrow">

                        <h1 className="tbs-copy">
                          <a href="index.html">&copy; 2024 Traffic & Barrier Solutions, LLC</a>
                        </h1>
                        <h1 className="footer-number">706-263-0175</h1>
                      </div>

            </footer>
        
        </div>
    )

    }