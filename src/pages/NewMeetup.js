import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    return (
      fetch(
        "https://udemy-max-react-course-code-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    )
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    </section>
  )
}

export default NewMeetupPage