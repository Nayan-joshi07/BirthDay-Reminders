import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {
        people.map((person) => {
          const value = person;
          return (
            <article key={value.id} className='person'>
              <img src={value.image} alt={value.name} />
              <h4>{value.name}</h4>
              <p>{value.age} Years</p>
            </article>
          )
        })
      }
    </>
  );
};

export default List;
