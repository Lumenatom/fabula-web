import React from 'react'
import '../Map.css'


function ModalMap({modalWindow, setModalWindow}) {
  return (
    <>
    {
      modalWindow.isVisible
      ? <div className='modal_map_wrapper' onClick={()=>setModalWindow({isVisible:false})}>
          <div className='modal_map_bg'>
            <div className='modal_map_conteiner'>
               <img src={modalWindow.image} alt=""/>
            <div class="modal_map_content">
              <h2>{modalWindow.title}</h2>
              <p>{modalWindow.text}</p>
            </div>
            </div>
           
            
          </div>
      </div>
    : null
    }
    </>
    
  )
}

export default ModalMap