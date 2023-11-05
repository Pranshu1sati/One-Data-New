"use client";
import * as React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import AddQualification from "./QualificationsForm/AddQualificaton";
import ResetPasswordDialog from "./ChangePwd";

interface Props {
  teacherId: string;
}

export default function ChangePwdButton({ teacherId }: Props) {
  // ... Your existing code ...

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Change Password</button>
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
            maxWidth: "900px",
            minWidth : "600px",
            display:"flex",
            justifyContent : "center",
            alignItems : "center"

            // alignContent : "center",
            // alignItems : 'flex-end'
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
        ariaHideApp={false} // This is to avoid an accessibility warning
        
      ><div className="my-auto">
        <button
            onClick={handleModalClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
       <button><ResetPasswordDialog/></button>
        </div>
      </ReactModal>
    </div>
  );
}
