import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    return (
      "https://udemy-max-react-course-code-default-rtdb.asia-southeast1.firebasedatabase.app/"
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