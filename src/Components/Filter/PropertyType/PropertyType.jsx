import { v4 as uuid } from "uuid";


const propertyTypes = [
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const PropertyType = () => {
 

  return (
    <div className="filter-container">
      <span className="filter-label">Property Type</span>
      <div className="d-flex gap-larger">
        {propertyTypes.map(({ id, type }) => (
          <span
            className="span-label property-type cursor-pointer align-center justify-center on-hover"
              key={id}
             >
             {type}
          </span>
        ))}
      </div>
    </div>
  );
};