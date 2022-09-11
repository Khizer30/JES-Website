import { useState, useEffect, useRef } from "react" ;
import { collection, getDocs, QuerySnapshot, DocumentData, QueryDocumentSnapshot } from "firebase/firestore" ;
// ...
import db from "../config/firebase" ;
import Events from "../components/Events" ;

// Data Interface
interface Data
{
  title?: string ;
  description?: string ;
  videoSrc?: string ;
}

// School Events
function SchoolEvents(): JSX.Element
{
  // Variables
  const [data, setData] = useState<Data[]>([]) ;
  const turn = useRef<boolean>(false) ;

  // Fetch Data
  async function fetchData(): Promise<void>
  {
    let temp: Data[] = [] ;
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, "events")) ;

    querySnapshot.forEach((doc: QueryDocumentSnapshot) =>
    {
      if (doc.exists())
      {
        temp.push(doc.data()) ;
      }
    })

    setData(temp) ;
  }

  // Effect
  useEffect(() =>
  {
    fetchData() ;
  }, []) ;

  // Event Mapper
  function eventMapper(x: Data): JSX.Element
  {
    turn.current = !turn.current ;

    return (
    <>
      <Events 
        title={ x.title }
        description={ x.description }
        videoSrc={ x.videoSrc }
        type={ turn.current } 
      />
    </>
    )
  }

  return (
  <>
  {
    data.map(eventMapper)
  }
  </>
  )
}

// Export School Events
export default SchoolEvents ;