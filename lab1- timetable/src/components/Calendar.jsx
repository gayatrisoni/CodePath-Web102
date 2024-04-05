import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="time">8 am</td>
                    <Event event='Breakfast 🎩 ' color = 'green'  />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Yolk 🍳' color ='green'/>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">9 am</td>
                    <Event event='Subway 🚊' color ='pink'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' color ='blue'/>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Dance' color='pink'></Event>
                    <td></td>
                    <Event event='Breakfast' color='black'></Event>
                </tr>

                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Museum" color='blue'></Event>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">12 pm</td>
                    <Event event='Breakfast' color='black'></Event>
                    <Event event="club" color='blue'></Event>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                </tr>

                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink'/>
                </tr>

                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='beach' color ='blue'/>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink'/>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="shooping" location="Maple & Ash" color='pink'></Event>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">5 pm</td>
                    <Event event='Fancy Dinner 🎩 ' color = 'green'  />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="club" color='blue'></Event>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Calendar;