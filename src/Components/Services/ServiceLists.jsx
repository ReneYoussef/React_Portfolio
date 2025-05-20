

function ServiceLists({ services }) {
  return (
    <div className="container">
      {services.map((service) => (
        <div key={service.id} className="journal-entry">
          <h3 className="entry-title">{service.title}</h3>
          <p className="entry-text">{service.description}</p>
          
        </div>
      ))}
    </div>
  );
}

export default ServiceLists;
