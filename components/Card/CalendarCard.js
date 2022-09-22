import { Fragment, useState } from 'react'
import { Label, Card } from 'reactstrap'
import Flatpickr from 'react-flatpickr'

const CalendarCard = () => {
  const [picker, setPicker] = useState(new Date())
  return (
    <Card className='calendarCard'>
      <Flatpickr
        value={picker}
        data-enable-time
        id='range-picker'
        className='hidden'
        onChange={date => setPicker(date)}
        options={{
          mode: 'range',
          inline: true,
        }}
      />
    </Card>
  )
}

export default CalendarCard
