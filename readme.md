# Great React 101 refresher course

```
npm install react-router-dom
```
1. connect label with input with "htmlFor"

2. the backend of this is using firebase from google
for development, when creating realtime database, can enable it in test mode, rather than lock mode.

3. Can use fetch of axios to handle API requests

## React Concepts Refresher
- `useRef`
React allows setting up refs to DOM elements which establishes connection between the form and submitHandler. It allows you to persist values between renders. For reading form inputs, use Refs. If changing value, then use useState.
- `useSWR`
to use SWR, you need to install `npm install SWR`. SWR allows for client side on demand fetching of data in React. Check how it works well with `getStaticProps` in NextJS
- `useRouter`
allows you to get values encoded in the URL (among other things like programming navigation with `router.push("/" + props.id);`
```
import { useRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return ( ... );
}
export default MeetupItem;
```
