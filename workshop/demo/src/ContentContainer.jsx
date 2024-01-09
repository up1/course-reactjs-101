function ContentContainer() {
  
  console.log('ContentContainer')

  return (
    <>
      <BannerComponent/>
      <RegisterContainer/>
    </>
  )
}

function BannerComponent() {
  return (
    <>
      <h1>Banner</h1>
    </>
  )
}

function RegisterContainer() {
  return (
    <>
      <h1>RegisterContainer</h1>
    </>
  )
}

export default ContentContainer
