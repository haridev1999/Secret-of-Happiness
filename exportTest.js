export default class user 
{
		constructor(name,age)
		{
				this.name=name;
				this.age=age;
		}
}
export function printName(user)
{
		console.log(`This users name is ${user.name}`);
}
export function printAge(user)
{
		console.log(`This user is ${user.age}`);
}
