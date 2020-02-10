import React, { useState, useEffect } from 'react';
import { List, Avatar, Input } from 'antd';

// services
import PeopleService from '../../services/PeopleService';

import './People.scss';

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const { data: peopleList } = await PeopleService.listPeople();

      setPeople(peopleList);
    };

    fetchPeople();
  }, []);

  const searchByName = (value) => {
    if (value.length >= 3) {
      PeopleService.getPeopleByName(value)
        .then(({ data }) => {
          setPeople(data);
        });
    } else {
      PeopleService.listPeople().then(({ data }) => setPeople(data));
    }
  }

  return (
    <div className="People">
      <Input className="People__input" placeholder="Search by name" onChange={({ target }) => searchByName(target.value)} />
      <List
        className="People__list"
        itemLayout="horizontal"
        dataSource={people}
        renderItem={person => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={person.avatarUrl} />}
              title={`${person.firstName} ${person.lastName} (${person.jobTitle})`}
              description={person.phoneNumber}
            />
          </List.Item>
        )}
      />
      <span>{`users ${people.length}`}</span>
    </div> 
  )
};

export default People;
