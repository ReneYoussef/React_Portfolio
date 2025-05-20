

function ServiceLists({ services }) {
  return (
    <div className="Services-container">
      {services.map((service) => (
        <div key={service.id} className="services">
          <h3 className="services-title">{service.title}</h3>
          <p className="services-text">{service.description}</p>
          
        </div>
      ))}
    </div>
  );
}

export default ServiceLists;
