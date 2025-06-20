import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap";
import type { BookingDetails } from "./App";

type GuestSelectorProps = {
    booking: BookingDetails;
    setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};

// ... your existing handlers
const GuestSelector = ({ booking, setBooking }: GuestSelectorProps) => {
    const [showModal, setShowModal] = useState(false);
    const { guests, guestNights } = booking;
    const [wantsGuests, setWantsGuests] = useState<boolean>(false); // NEW toggle state

    const generateLabel = () => {
        if (!wantsGuests) return "No guest selected";

        if ((guests ?? 0) === 0 && (guestNights ?? 0) <= 1) {
            return "Select guests";
        }

        return `${guests ?? 0} Guest${guests === 1 ? "" : "s"}, ${guestNights ?? 1} Night${guestNights === 1 ? "" : "s"}`;
    };


    return (
        <div className="guest-selector p-lg-4 py-2">
            <Form.Group controlId="guestSwitch" className="mb-2">
                <Form.Check
                    type="switch"
                    id="add-guests-switch"
                    label="Are you having guests?"
                    checked={wantsGuests}
                    onChange={() => {
                        const wants = !wantsGuests;
                        setWantsGuests(wants);

                        if (!wants) {
                            setBooking((prev) => ({
                                ...prev,
                                guests: 0,
                                guestNights: 1,
                            }));
                        } else {
                            setShowModal(true); // optional auto-open
                        }
                    }}
                    className="small"

                />
            </Form.Group>

            <div
                className={`guest-label d-flex align-items-center border rounded p-2 ${wantsGuests ? "" : "bg-light text-muted"
                    }`}
                onClick={() => {
                    if (wantsGuests) setShowModal(true); // only allow opening if wantsGuests is true
                }}
                style={{ cursor: wantsGuests ? "pointer" : "not-allowed" }}
            >
                <FaUserFriends className="me-2" />
                <span className="small">{generateLabel()}</span>
            </div>

            <Modal
                size="sm"
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton className="py-2">
                    <Modal.Title className="p-0">
                        <span className="fs-6">Select Guest Info</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="guest-group mb-3">
                        <label>Total Guests</label>
                        <div className="counter">
                            <button
                                className="btn btn-success px-3"
                                onClick={() =>
                                    setBooking((prev) => ({
                                        ...prev,
                                        guests: Math.max(0, (prev.guests || 0) - 1),
                                    }))
                                }
                            >
                                -
                            </button>
                            <span className="mx-2 fs-5">{booking.guests || 0}</span>
                            <button
                                className="btn btn-success px-3"
                                onClick={() =>
                                    setBooking((prev) => ({
                                        ...prev,
                                        guests: (prev.guests || 0) + 1,
                                    }))
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="guest-group mb-3">
                        <label>Number of guestNights</label>
                        <div className="counter">
                            <button
                                className="btn btn-success px-3"
                                onClick={() =>
                                    setBooking((prev) => ({
                                        ...prev,
                                        guestNights: Math.max(1, (prev.guestNights || 0) - 1)
                                    }))
                                }
                            >
                                -
                            </button>
                            <span className="mx-2 fs-5">{booking.guestNights || 1}</span>
                            <button
                                className="btn btn-success px-3"
                                onClick={() =>
                                    setBooking((prev) => ({
                                        ...prev,
                                        guestNights: (prev.guestNights || 0) + 1,
                                    }))
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer className="py-1">
                    <Button variant="success" onClick={() => setShowModal(false)}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GuestSelector;
