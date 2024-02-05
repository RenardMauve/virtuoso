export default class Solmization{
	constructor(names){
		this.names=names;
	}
	
	getNameAt(index){
		return this.names[index];
	}
	
	count(){
		return this.names.count();
	}
}