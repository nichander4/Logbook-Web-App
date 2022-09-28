import moment from "moment";
import { Fragment, useEffect, useState } from "react";

const RealTimeShow = () => {
    const [dateState, setDateState] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    useEffect(() => {
        setInterval(() => setDateState(moment().format('MMMM Do YYYY, h:mm:ss a')), 1000)
    }, [])

  return (<Fragment><h1>{dateState}</h1></Fragment>);
};

export default RealTimeShow;
