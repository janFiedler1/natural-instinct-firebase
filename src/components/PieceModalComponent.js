import React, {useState} from "react";
import "../component-css/PieceModalComponent.css"

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

return (
    <React.Fragment>
        <button onClick={toggleModal} className="btn-modal">Open</button>
        {modal && (<div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>Hello</h2>
                <p>Welcome to the modal</p>
                <button onClick={toggleModal} className="close-modal">Close</button>
            </div>
        </div>)}
    </React.Fragment>
)

}