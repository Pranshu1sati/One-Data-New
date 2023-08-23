"use client";
import ReactModal from "react-modal";
import { useState } from "react";
import AddHod from "../FormComponents/AddHod";
import * as React from 'react'
interface ChangeHodProps{
  _id:string;
}
const ChangeHodButton: React.FC<ChangeHodProps>=({_id}) =>{
  console.log(_id,"this is the departmetn id");
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Add Hod</button>
      <ReactModal
        isOpen={modalOpen}
        onRequestClose={handleModalClose}
        shouldCloseOnOverlayClick={true}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            minWidth : "418px",
            minHeight:"400px"
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
        ariaHideApp={false} // This is to avoid an accessibility warning
        
      ><div className="my-auto min-h-[488px]">
        <AddHod _id={_id}/>
        </div>
      </ReactModal>
    </div>
  );
}
export default ChangeHodButton;