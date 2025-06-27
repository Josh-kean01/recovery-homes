import type { BookingDetails } from "./App";
import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";

type GuestSelectorProps = {
    booking: BookingDetails;
    setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};

// ... your existing handlers
const GuestSelector = ({ booking, setBooking }: GuestSelectorProps) => {
    const [showModal, setShowModal] = useState(false);
    const { guests = 0, guestNights = 1 } = booking;
    const wantsGuests = guests > 0;

    const generateLabel = () => {
        if (!wantsGuests) return "No guest selected";

        return `${guests} Guest${guests === 1 ? "" : "s"}, ${guestNights} Night${guestNights === 1 ? "" : "s"}`;
    };

    return (
        <div className="guest-selector position-relative">
            <Form.Group controlId="guestSwitch">
                <Form.Check
                    type="switch"
                    id="add-guests-switch"
                    label="Are you having guests?"
                    checked={wantsGuests}
                    onChange={() => {
                        if (wantsGuests) {
                            setBooking((prev) => ({
                                ...prev,
                                guests: 0,
                                guestNights: 1,
                            }));
                        } else {
                            setShowModal(true);
                        }
                    }}
                    className="small"
                />
            </Form.Group>

            <div
                className={`guest-label d-flex align-items-center border rounded p-2 ${wantsGuests ? "" : "bg-light text-muted"}`}
                onClick={() => wantsGuests && setShowModal(true)}
                style={{ cursor: wantsGuests ? "pointer" : "not-allowed" }}
            >
                <FaUserFriends className="me-2" />
                <span className="small">{generateLabel()}</span>
            </div>

            <Modal size="sm" show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton className="py-2">
                    <Modal.Title className="fs-6">Select Guest Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Guests counter */}
                    <div className="guest-group mb-3">
                        <label>Total Guests</label>
                        <div className="counter">
                            <button className="btn btn-success px-3" onClick={() => setBooking(prev => ({
                                ...prev,
                                guests: Math.max(0, guests - 1)
                            }))}>-</button>
                            <span className="mx-2 fs-5">{guests}</span>
                            <button className="btn btn-success px-3" onClick={() => setBooking(prev => ({
                                ...prev,
                                guests: guests + 1
                            }))}>+</button>
                        </div>
                    </div>

                    {/* Guest nights counter */}
                    <div className="guest-group mb-3">
                        <label>Number of guest nights</label>
                        <div className="counter">
                            <button className="btn btn-success px-3" onClick={() => setBooking(prev => ({
                                ...prev,
                                guestNights: Math.max(1, guestNights - 1)
                            }))}>-</button>
                            <span className="mx-2 fs-5">{guestNights}</span>
                            <button className="btn btn-success px-3" onClick={() => setBooking(prev => ({
                                ...prev,
                                guestNights: guestNights + 1
                            }))}>+</button>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer className="py-1">
                    <Button variant="success" onClick={() => setShowModal(false)}>Done</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GuestSelector;