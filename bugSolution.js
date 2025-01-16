```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path=':id' element={<ContactDetail />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <div>Home</div>};
function About() { return <div>About</div>};
function Contact() { 
  const { id } = useParams();
  return (
    <div>
      <h1>Contact</h1>
      {id && <p>Contact ID: {id}</p>}
      {/* Conditional rendering for ContactDetail based on id */}
    </div>
  );
};
function ContactDetail() { 
  const { id } = useParams();
  return (
    <div> 
      <h1>Contact Detail</h1>
      <p>Contact ID: {id}</p>
    </div>
  );
};
```