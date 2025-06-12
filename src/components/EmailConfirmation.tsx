
import React from 'react';

interface EmailConfirmationProps {
  name: string;
  email: string;
  agency: string;
  serviceType: string;
}

const EmailConfirmation: React.FC<EmailConfirmationProps> = ({ name, email, agency, serviceType }) => {
  // In a real application, this component would be rendered on the server
  // and sent as an HTML email
  return (
    <div className="email-template">
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid #eee' }}>
          <h1 style={{ color: '#333', margin: '0' }}>Quote Request Acknowledgement</h1>
        </div>
        
        <div style={{ padding: '20px 0' }}>
          <p style={{ marginBottom: '20px' }}>Dear {name},</p>
          
          <p style={{ marginBottom: '20px' }}>
            Thank you for submitting your quote request to GOVTECH Shared Services. 
            We have received your request. Our team will review your request and revert to you within 1-2 business days.
          </p>
          
          <div style={{ background: '#f7f7f7', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
            <h3 style={{ margin: '0 0 10px', color: '#444' }}>Request Summary:</h3>
            <p style={{ margin: '5px 0' }}><strong>Name:</strong> {name}</p>
            <p style={{ margin: '5px 0' }}><strong>Email:</strong> {email}</p>
            <p style={{ margin: '5px 0' }}><strong>Agency:</strong> {agency}</p>
            <p style={{ margin: '5px 0' }}><strong>Service Type:</strong> {serviceType}</p>
          </div>
          
          <p style={{ marginBottom: '20px' }}>
            If you have any urgent questions or need to update your request, please contact us at 
            <a href="mailto:GOVTECH-IAD-SS@tech.gov.sg" style={{ color: '#0066cc', textDecoration: 'none' }}> GOVTECH IAD-SS</a>.
          </p>
          
          <p>Best regards,</p>
          <p><strong>GOVTECH Shared Services</strong></p>
        </div>
        
        <div style={{ borderTop: '1px solid #eee', padding: '20px', textAlign: 'center', color: '#777', fontSize: '12px' }}>
          <p>This is an automated message, please do not reply to this email.</p>
          <p>© 2025 GOVTECH Shared Services. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
