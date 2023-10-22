function skillsMember(member) {
    // Replace this with your code to retrieve the member's skills
    const skills = ['weightlifting', 'cardio', 'yoga'];
  
    // Replace this with your code to do something with the member's skills
    console.log(`${member} has the following skills: ${skills.join(', ')}`);
  }
  
const gymMembers = [
    { name: 'John', skills: ['weightlifting', 'cardio'] },
    { name: 'Jane', skills: ['yoga', 'pilates'] },
    { name: 'Bob', skills: ['boxing', 'kickboxing', 'muay thai'] }
  ];
  
  function listSkills(members) {
    members.forEach(member => {
      console.log(`${member.name}'s skills: ${member.skills.join(', ')}`);
    });
  }
  
  listSkills(gymMembers);