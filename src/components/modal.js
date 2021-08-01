import React from 'react'

const Modal = () => {
    return (
        <div>
             <Modal isOpen={theModal} onRequestClose={() => setTheModal(false)}> <div className="theModal">
                <div >
                    <img className="modalPic" src={item.pic} alt="" />
                </div>
                <div>
                    <p className="modalDate">
                        {item.date}
                    </p>
                    </div>
                <p className="modalLine">_________________________________________________________________________________________________________________________________</p>
                <div><h2 className="modalTitle">{item.title}</h2></div>

                <div><p className="modalText">{item.text}</p></div>

            </div> </Modal>
            
        </div>
    )
}

export default Modal
