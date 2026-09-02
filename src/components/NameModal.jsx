import { useState } from "react";
import { IMAGES } from "@/constants/images";
import "./NameModal.css";

const NameModal = ({ onSave, onClose }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    onSave(trimmedName);
  };

  return (
    <div className="name-modal-overlay">
      <div className="name-modal">

        {/* Modal Header */}
        <img
          className="modal-header"
          src={IMAGES.modalheader}
          alt="Modal Header"
        />

        <p>
          Please tell us how to address u
        </p>

        {/* Name Note */}
        <div className="modal-note">

          {/* Overlapping Name Label */}
          <img
            className="modal-name"
            src={IMAGES.name}
            alt="Name"
          />

          <p className="p-note">
            note: max of 8 characters
          </p>

          <form onSubmit={handleSubmit}>
            <input
              className="modal-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={8}
              autoFocus
            />

            <button
              className="save-button"
              type="submit"
            >
              <img
                src={IMAGES.savebtn}
                alt="Save"
              />
            </button>
          </form>

          <img
            className="smiley"
            src={IMAGES.smiley}
            alt="Smiley Face"
          />

        </div>

      </div>
    </div>
  );
};

export default NameModal;
