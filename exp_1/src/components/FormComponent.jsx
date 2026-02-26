import { useState } from 'react'
import '../styles/FormComponent.css'

export default function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    skills: [],
    address: '',
    state: '',
    country: ''
  })

  const [submittedData, setSubmittedData] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSkillChange = (e) => {
    const { value, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      skills: checked
        ? [...prevState.skills, value]
        : prevState.skills.filter(skill => skill !== value)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show all details in alert
    const details = `
SUBMITTED FORM DATA
==================
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Date of Birth: ${formData.dob}
Gender: ${formData.gender}
Skills: ${formData.skills.length > 0 ? formData.skills.join(', ') : 'None'}
Address: ${formData.address}
State: ${formData.state}
Country: ${formData.country}
    `
    alert(details)
    setSubmittedData(formData)
  }

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dob: '',
      gender: '',
      skills: [],
      address: '',
      state: '',
      country: ''
    })
    setSubmittedData(null)
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <section className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
          </section>

          <section className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dob" className="form-label">Date of Birth *</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="form-input"
                  max={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Gender *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleInputChange}
                      required
                    />
                    <span>Male</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleInputChange}
                    />
                    <span>Female</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === 'Other'}
                      onChange={handleInputChange}
                    />
                    <span>Other</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section className="form-section">
            <div className="form-group">
              <label className="form-label">Skills</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value="JavaScript"
                    checked={formData.skills.includes('JavaScript')}
                    onChange={handleSkillChange}
                  />
                  <span>JavaScript</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value="React"
                    checked={formData.skills.includes('React')}
                    onChange={handleSkillChange}
                  />
                  <span>React</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value="Node.js"
                    checked={formData.skills.includes('Node.js')}
                    onChange={handleSkillChange}
                  />
                  <span>Node.js</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value="CSS"
                    checked={formData.skills.includes('CSS')}
                    onChange={handleSkillChange}
                  />
                  <span>CSS</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value="Python"
                    checked={formData.skills.includes('Python')}
                    onChange={handleSkillChange}
                  />
                  <span>Python</span>
                </label>
              </div>
            </div>
          </section>

          <section className="form-section">
            <div className="form-group">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Enter your full address"
                rows="4"
              />
            </div>
          </section>

          <section className="form-section">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state" className="form-label">State *</label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select a State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="country" className="form-label">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Select a Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                  <option value="Brazil">Brazil</option>
                </select>
              </div>
            </div>
          </section>

          <section className="form-actions">
            <button type="submit" className="btn btn-submit">Submit</button>
            <button type="button" onClick={handleCancel} className="btn btn-cancel">Cancel</button>
          </section>
        </form>

        {submittedData && (
          <div className="submission-details">
            <h3>Form Submitted Successfully!</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">First Name:</span>
                <span className="detail-value">{submittedData.firstName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Last Name:</span>
                <span className="detail-value">{submittedData.lastName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date of Birth:</span>
                <span className="detail-value">{submittedData.dob}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Gender:</span>
                <span className="detail-value">{submittedData.gender}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Skills:</span>
                <span className="detail-value">{submittedData.skills.length > 0 ? submittedData.skills.join(', ') : 'None'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Address:</span>
                <span className="detail-value">{submittedData.address || 'Not provided'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">State:</span>
                <span className="detail-value">{submittedData.state}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Country:</span>
                <span className="detail-value">{submittedData.country || 'Not provided'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
