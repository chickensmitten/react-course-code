
import { useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    "https://udemy-max-react-course-code-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
  ).then(response => {
    return response.json();
  }).then(data => {
    setIsLoading(false);
    setLoadedMeetups(data);
  });

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* <ul> */}
        {/* {[<li key="1">List 1</li>,<li key="2">List 2</li>, <li key="3">List 3</li>]} */}
        {/* this demonstrates how jsx shows an array of objects, now imagine it as a function listing the array of objects */}
      {/* </ul> */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage