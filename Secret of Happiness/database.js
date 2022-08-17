
class User 
{
		constructor(id,name,age)
		{
				this.id=id;
				this.name=name;
				this.age=age;
		}
}
let users=[];
users.push(new User(1,'Haridev',22));
users.push(new User(2,'Vishnu',18));
export function createUser(id,name,age)
{
		let idNo= Number(id);
		let ageNo=Number(age);
		users.push(new User(idNo,name,ageNo));
}
createUser('3','Rishi','22')
export function retrieveUser(id)
{
		for(let i=0;i<users.length;i++)
		{
				let test=users[i];
				if(test.id==id)
				{
//						console.log(test);
						return test;
				}
		}
};
export function printUsers()
{
		
//		console.log(users)
}
