import React, { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { useForm } from 'react-hook-form'
function App() {
  let { handleSubmit, register } = useForm()
  let [url,setUrl] = useState('')
  let handleform = (e) =>{
    setUrl(e.url)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(handleform)}>
        <label htmlFor="url">
          <h1>Enter a URL for QR code</h1>
        </label>
        <input
          type="url"
          {...register("url")}
          placeholder="Enter an url"
          style={{ padding: "10px 20px", width: "200px", margin: "30px" }}
        />
        <input
          type="submit"
          value="Generate"
          style={{ padding: "10px 20px", width: "200px", margin: "30px" }}
        />
      </form>
      {url && <QRCodeCanvas value={url} />}
    </div>
  );
}

export default App