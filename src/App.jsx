import services from './services'
import AboutME from './Components/AboutMe'
import Header from './Components/Header'
import Service from './Components/Services'


export default function App() {

  const DataElement = services.map((service) => {
    return (
      <Service

      key={service.id} 
       {...service} 

      />
    );
  });
  return(
  <>
    <Header />
    <AboutME/>
     <main className="container">{DataElement}</main>
  
    </>
  )
}


