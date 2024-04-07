
import React, { useEffect } from 'react'

const UpdateDoc = () => {
    useEffect(() => {
        document.title = 'Document Title Updated';
      
    
        return () => {
          document.title = 'React App'; 
        };
      }, []);
  return (
    <div>
      Document title has been updated
    </div>
  )
}

export default UpdateDoc
