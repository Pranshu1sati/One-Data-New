"use client";
import * as React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
import { Button, Upload, Spin } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
interface IDProps {
  id: string;
}

const UploadFiles: React.FunctionComponent<IDProps> = (props) => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("teacherImage", selectedFile);

        const headers = {
          "Content-Type": "multipart/form-data",
          teacherid: props.id,
        };

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/teacher/upload`,
          formData,
          {
            headers,
          }
        );
          toast.success(response.data.message);
            router.refresh()

        console.log("Upload response:", response);
      } catch (error : any) {
        console.error("Error uploading file:", error);
        toast.error(error.data.message)
      }
    }
  };

  return (
    <>
      <button onClick={handleModalOpen}>Upload Profile Picture</button>
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
            minWidth: "418px",
            minHeight: "400px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
        ariaHideApp={false} // This is to avoid an accessibility warning
      >
        <div className="my-auto">
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
          <div className="flex justify-center align-center">
            <Upload.Dragger 
            className="mt-4 p-4 text-xl"
              multiple={false}
              listType="picture"
              showUploadList={{
                showRemoveIcon: true,
              }}
              // Custom remove icon
              beforeUpload={(file) => {
                console.log({ file });
                setSelectedFile(file);
                return false;
              }}
            >
              Drag and Drop here or click to select files from directory
              <br />
              <Button onClick={handleFileUpload}>Upload</Button>
            </Upload.Dragger>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
            <button
              className="bg-green-500 text-white rounded-xl px-2 text-xl"
              onClick={handleFileUpload}
            >
              Submit
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default UploadFiles;
