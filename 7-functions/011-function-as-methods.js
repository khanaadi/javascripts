const user = {
    firstname: 'Aadil',
    lastname: 'khan',
    work: 'Backend Dev',
    city: 'Guntur',
    wfh: true,
    skills: ['Python', 'sql', 'db'],
    company: {
      name: 'trangla',
      location: 'hyd'
    },
  
    details: function() {
      console.log(`User Details: Aadil khan`);
    }
  }
  
  console.log(user);
  console.log(`Data type of variable user is ${typeof user}`);
  
 
  console.log(`User City info: ${user.city}`);
  
 
  console.log(`User city info via bracket notation user['city'] = ${user['city']}`);
  
  
  const companyLocation = user.company.location;
  console.log(`companyLocation by dot notation = ${companyLocation}`);
  
  const companyLoc = user['company']['location'];
  console.log(`Company Location by bracket notation = ${companyLoc}`)
  
  const skills = user.skills;
  console.log(skills);
  
  user.details()
  