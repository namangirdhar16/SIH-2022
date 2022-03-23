import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function SearchBar() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <Button>Search Notes</Button>
        </>
        
    )
}

export default SearchBar;
