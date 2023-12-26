import React from 'react'

function Step2() {
  return (
    <form action="">
       <div className="form-group">
            <label HtmlFor="finance_name">Finance Name:</label><input 
            style={{width:'100%',marginBottom:'30px',padding:'5px'}}
            type="text" id="finance_name" name="finance_name" required pattern="[A-Za-z\s]+"
                title="Only alphabets and spaces allowed"/>
            
        </div>

        <div className="form-group">
            <label HtmlFor="location">Finance Store Location:</label>
            <select style={{width:'100%',marginBottom:'30px',padding:'5px'}} name="location" id="location" required>
                <option value="">Select a Location
                </option>
                <option value="maharashtra">Maharashtra</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="satara">Satara</option>
                <option value="sangli">Sangli</option>
            </select>
        </div>

        <div className="form-group">
            <label HtmlFor="Website">Website:</label>
            <input style={{width:'100%',marginBottom:'30px',padding:'5px'}}
            type="url" id="Website" name="Website" required/>
        </div>
    </form>
  )
}

export default Step2