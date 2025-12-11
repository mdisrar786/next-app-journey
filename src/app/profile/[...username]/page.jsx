import React from 'react'

 async function page({params}) {
    const data= await params;
    console.log(data)
  return (
    <div>
      <h1>Hello Profile dyanimic page </h1>
    </div>
  )
}

export default page
