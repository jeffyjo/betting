import TeamList from './TeamList'

const getTeam = (id) => {
	for(let team of TeamList){
		if(team.id === id){
			return team
		}
	}
}

export { getTeam }