import '../components/App.css';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { filter } from './redux/store';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => {return JSON.parse(localStorage.getItem('contacts')) ?? []}
  // );
  // const [filter, setFilter] = useState('');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter filter={filter}></Filter>
      <ContactList
        filter={filter}
      ></ContactList>
      {/* {contacts.length !== 0 && (
        <ContactList
          deleteContact={deleteContact}
          filter={filter}
          contacts={contacts}
        ></ContactList>
      )} */}
    </div>
  );
};
