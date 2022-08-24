
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://udemy-max-react-course-code-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    ).then(response => {
      return response.json();
    }).then(data => {
      // needs to tranform data cause firebase returns data in json when we need it in array
      const meetups = [];
      for (const key in data) {
        const meetup ={
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups); 
    });
  }, []);
  // when the dependency for useEffect is an empty array, there are no dependecy, 
  // then the fetch function only executes one time and first time. subsequent changes in the react component, it won't execute again.
  // if you put something like isLoading, whenever isLoading is changes, then useEffect will execute again.
  // useEffect helps with avoid infinite loop from useState

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