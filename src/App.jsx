import Hero       from './components/Hero';
import Parents     from './components/Parents';
import Countdown   from './components/Countdown';
import Events      from './components/Events';
import Gallery     from './components/Gallery';
import RSVPForm    from './components/RSVPForm';
import Footer      from './components/Footer';

export default function App() {
  return (
    <div className="bg-ivory font-sans text-charcoal overflow-x-hidden">
      <Hero />
      <Parents />
      <Countdown />
      <Events />
      <Gallery />
      <RSVPForm />
      <Footer />
    </div>
  );
}
