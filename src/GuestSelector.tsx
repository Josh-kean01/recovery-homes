import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import type { BookingDetails } from "./App";

type GuestSelectorProps = {
    booking: BookingDetails;
    setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};

const GuestSelector = ({ booking, setBooking }: GuestSelectorProps) => {
    const [showModal, setShowModal] = useState(false);
    const { adults, children, rooms, childrenAges } = booking;

    const handleChildrenChange = (count: number) => {
        const newAges = Array(count)
            .fill("")
            .map((_, idx) => childrenAges[idx] || "");
        setBooking((prev) => ({ ...prev, children: count, childrenAges: newAges }));
    };

    const handleAgeChange = (index: number, value: string) => {
        const updated = [...childrenAges];
        updated[index] = value;
        setBooking((prev) => ({ ...prev, childrenAges: updated }));
    };

    const generateLabel = () => {
        const parts = [];
        if (adults > 0) parts.push(`${adults} Adult${adults > 1 ? "s" : ""}`);
        if (children > 0) parts.push(`${children} Child${children !== 1 ? "ren" : ""}`);
        parts.push(`${rooms} Room${rooms > 1 ? "s" : ""}`);
        return parts.join(", ");
    };

    const renderAgeSelect = (index: number) => (
        <div key={index}>
            <label htmlFor={`child-age-select-${index}`} className="visually-hidden">
                Age of child {index + 1}
            </label>
            <Form.Select
                id={`child-age-select-${index}`}
                aria-label={`Age of child ${index + 1}`}
                title={`Age of child ${index + 1}`}
                value={childrenAges[index] || ""}
                onChange={(e) => handleAgeChange(index, e.target.value)}
                className="my-1"
            >
                <option value="">Select age</option>
                {Array.from({ length: 18 }, (_, i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </Form.Select>
        </div>
    );

    return (
        <div className="guest-selector">
            <p className="mb-0 text-muted" style={{ fontVariant: "small-caps" }}>
                Rooms & Guests
            </p>
            <div
                className="guest-label d-flex align-items-center border rounded p-2"
                onClick={() => setShowModal(true)}
                style={{ cursor: "pointer" }}
            >
                <FaUserFriends className="me-2" />
                <span>{generateLabel()}</span>
            </div>

            <Modal
                size="sm"
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className="small">Select Guests and Rooms</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="guest-group mb-3">
                        <label>Adults</label>
                        <div className="counter">
                            <button
                                onClick={() =>
                                    setBooking((prev) => ({
                                        ...prev,
                                        adults: Math.max(0, prev.adults - 1),
                                    }))
                                }
                            >
                                -
                            </button>
                            <span>{adults}</span>
                            <button
                                onClick={() =>
                                    setBooking((prev) => ({ ...prev, adults: prev.adults + 1 }))
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="guest-group mb-3">
                        <label>Children</label>
                        <div className="counter">
                            <button
                                onClick={() => handleChildrenChange(Math.max(0, children - 1))}
                            >
                                -
                            </button>
                            <span>{children}</span>
                            <button onClick={() => handleChildrenChange(children + 1)}>
                                +
                            </button>
                        </div>
                        {children > 0 && (
                            <div className="mt-2">
                                {childrenAges.map((_, idx) => renderAgeSelect(idx))}
                            </div>
                        )}
                    </div>

                    <div className="guest-group mb-3">
                        <label>Rooms</label>
                        <div className="counter">
                            <button
                                onClick={() =>
                                    setBooking((prev) => ({
                                        ...prev,
                                        rooms: Math.max(1, prev.rooms - 1),
                                    }))
                                }
                            >
                                -
                            </button>
                            <span>{rooms}</span>
                            <button
                                onClick={() =>
                                    setBooking((prev) => ({ ...prev, rooms: prev.rooms + 1 }))
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => setShowModal(false)}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GuestSelector;
