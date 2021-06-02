import { useState, useEffect } from 'react';
import { TaxiItemList } from '../components/TaxiItemList';
import { BiTaxi } from 'react-icons/bi';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { ImClock } from 'react-icons/im';
import { DialogComponent } from '../components/DialogComponent';
import { Notification } from '../components/Notification';
import services from '../services/services';

export const  HomePage = () => {
  const [open, setOpen] = useState({ state: false, target: null });
  const [times, setTimes] = useState([]);
  const [userReservations, setUserReservation] = useState([]);
  const [notificationContent, setNotificationContent] = useState({ type: null, message: null });

  const fetchTimes = async () => setTimes(await services.getTimes());

  const fetchUserReservations = async () => {
    const email = JSON.parse(localStorage.getItem('userLogged')).email;
    setUserReservation(await services.getUserReservations({ email: email }));
  }
  
  useEffect(() => {
    fetchTimes();

    if (localStorage.getItem('userLogged')) fetchUserReservations()
  }, []);

  const triggerNotification = (type, message) => {
    setNotificationContent({ type: type, message: message });
    return setTimeout(() => {
      setNotificationContent({ type: null, message: null });
    }, 5000);
  }

  const handleItemClick = async ({ target }) => {
    if (target.classList.contains('run-out')) return triggerNotification('error', 'No taxis available for that hour');

    if (localStorage.getItem('userLogged')) {
      const email = JSON.parse(localStorage.getItem('userLogged')).email;

      if (!target.classList.contains('reserved')) {
        const result = await services.reservationDone({ email: email, hour: target.id });

        if (result.type === 'error') return triggerNotification(result.type, result.message);

        triggerNotification(result.type, result.message);
        fetchTimes();
        fetchUserReservations();
        return target.classList.toggle('reserved');
      } else {
        const result = await services.reservationCancel({ email: email, hour: target.id });

        if (result.type === 'error') return triggerNotification(result.type, result.message);

        triggerNotification(result.type, result.message);
        fetchTimes();
        fetchUserReservations();
        return target.classList.toggle('reserved');
      }
    }

    setOpen({ state: true, target: target});
  }

  const handleDialogClose = async ({ target }) => {
    const { innerText } = target;
    if (innerText === 'CANCEL') return setOpen({ state: false, target: null });

    const email = target.classList.contains('MuiButton-label')
                  ? target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].childNodes[0].value
                  : false;

    if (services.validateEmail(email)) {
      const result = await services.reservationDone({ email: email, hour: open.target.id });

      if (result.type === 'error') return triggerNotification(result.type, result.message);

      setOpen({ state: false, target: null });
      sessionStorage.setItem('guest', email);
      return window.location.replace('/guest-reservation-done');
    } else {
      triggerNotification('error', 'Invalid email');
    }
  }

  return (
    <div>
      <h2>Taxi schedule</h2>
      <Notification message={notificationContent.message} type={notificationContent.type} />
      <DialogComponent open={open.state} setOpen={setOpen} handleClose={handleDialogClose} />
      <ul className="taxis-list-container">
        <li className="taxi-item-list">
          <p className="taxi-list-icon"><ImClock />&nbsp;<span>Hour</span></p>
          <p className="taxi-list-icon"><BiTaxi />&nbsp;<span>Available taxis</span></p>
          <p className="taxi-list-icon"><AiOutlineCheckSquare />&nbsp;<span>Availability</span></p>
        </li>
        {
          times[0]
          ? times.map(time => {
              for (let i = 0; i < userReservations.length; i++) {
                if (userReservations[i].hour === time.hour) {
                  return (
                    <TaxiItemList
                      className="taxi-item-list reserved"
                      key={time.hour}
                      handleItemClick={handleItemClick}
                      hour={time.hour}
                      availability={time.taxis_availability}
                      state="Reserved"
                    />
                  );
                }
              }

              if (time.taxis_availability === 0) {
                return (
                  <TaxiItemList
                    className="taxi-item-list run-out"
                    key={time.hour}
                    handleItemClick={handleItemClick}
                    hour={time.hour}
                    availability={time.taxis_availability}
                    state="No"
                  />
                );
              }

              return (
                <TaxiItemList
                  className="taxi-item-list"
                  key={time.hour}
                  handleItemClick={handleItemClick}
                  hour={time.hour}
                  availability={time.taxis_availability}
                  state="Yes"
                />
              );
            })
          : null
        }
      </ul>
    </div>
  );
}
