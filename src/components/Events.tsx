// Props Interface
interface Props
{
  title: string ;
  description: string ;
  videoSrc: string ;
  type: boolean ;
}

// Events
function Events({ title, description, videoSrc, type }: Props): JSX.Element
{
  return (
  <>
    <div className="container-fluid marginTB">
      <div className="row">
      { type &&
        <div className="col-md-6">
          <iframe src={ videoSrc } width="100%" height="350px" allowFullScreen></iframe>
        </div>
      }
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="eventsHeading"> { title } </h1>
          <p className="eventsP"> { description } </p>
        </div>
      { !type &&
        <div className="col-md-6">
          <iframe src={ videoSrc } width="100%" height="350px" allowFullScreen></iframe>
        </div>
      }
      </div>
    </div>

    <div className="container-fluid d-flex d-sm-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center">
      <hr className="eventsHR" />
    </div>
  </>
  )
}

// Export Events
export default Events ;