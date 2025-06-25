import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa";
import type { BookingDetails } from "./App";
import GuestSelector from "./GuestSelector";

type BookingFormProps = {
  booking: BookingDetails;
  setBooking: React.Dispatch<React.SetStateAction<BookingDetails>>;
};

const BookingForm = ({ booking, setBooking }: BookingFormProps) => {
  const { checkInDate, surgeryDate, checkOutDate } = booking;

  const handleChange = (field: keyof BookingDetails, date: Date | null) => {
    setBooking((prev) => ({ ...prev, [field]: date }));
  };

  const shouldShowAlert = checkInDate !== null && checkOutDate !== null;

  const getNightCount = () => {
    if (checkInDate && checkOutDate) {
      const msPerDay = 1000 * 60 * 60 * 24;
      const nights = Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) / msPerDay
      );
      return nights + 1;
    }
    return 0;
  };

  return (
    <div className="booking-form p-lg-4 p-2 rounded">
      <div className="row g-3 align-items-center">
        <div className="col-5 col-md ">
          <label
            className="form-label d-flex align-items-center text-muted"
            style={{ fontVariant: "small-caps" }}
          >
            <FaCalendarAlt />
            &nbsp;Dates
            {checkInDate && checkOutDate && (
              <div className="small ms-2 mb-0">{getNightCount()} night(s)</div>
            )}
          </label>
          {/* Check-in Date */}
          <DatePicker
            selected={checkInDate}
            onChange={(date) => handleChange("checkInDate", date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            className="form-control date-picker"
            placeholderText="Check-in"
            dateFormat="eee, MMM d"
            maxDate={
              surgeryDate
                ? new Date(surgeryDate.getTime() - 86400000)
                : undefined
            }
            popperPlacement="bottom-end"
          />
        </div>

        <div className="col-1 col-md d-flex align-items-center justify-content-center  mt-5">
          <FaLongArrowAltRight className="text-muted px-0 mx-md-2 " />
        </div>

        <div className="col-6 col-md">
          <label className="form-label d-block invisible">Dates</label>
          {/* Surgery Date */}
          <DatePicker
            selected={surgeryDate}
            onChange={(date) => handleChange("surgeryDate", date)}
            className="form-control date-picker"
            placeholderText="Surgery Date"
            dateFormat="eee, MMM d"
            minDate={
              checkInDate
                ? new Date(checkInDate.getTime() + 86400000)
                : undefined
            }
            maxDate={
              checkOutDate
                ? new Date(checkOutDate.getTime() - 86400000)
                : undefined
            }
            // disabled={!checkInDate}
          />
        </div>

        <div className="col-md d-flex align-items-center justify-content-center d-none d-lg-flex mt-5">
          <FaLongArrowAltRight className="text-muted px-0 mx-md-2 " />
        </div>

        <div className="col-5 col-md ">
          <label className="form-label d-block invisible">Dates</label>
          {/* Check-out Date */}
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => handleChange("checkOutDate", date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            className="form-control date-picker"
            placeholderText="Check-out"
            dateFormat="eee, MMM d"
            minDate={
              surgeryDate
                ? new Date(surgeryDate.getTime() + 86400000)
                : checkInDate ?? undefined
            }
            popperPlacement="bottom-start"
          />
        </div>

        <div className="col-1 col-md d-flex align-items-center justify-content-center mt-5">
          <FaLongArrowAltRight className="text-muted px-0 mx-md-2" />
        </div>

        <div className="col-6 col-md text-nowrap">
          <GuestSelector booking={booking} setBooking={setBooking} />
          {/* <GuestSelector */}
        </div>

        {shouldShowAlert && (
          <div className="text-center pt-1 w-100">
            One extra day will be added for pre-arrival as per our booking
            policy.
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
