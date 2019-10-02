class MyUser {
	constructor() {
		this._id = '';
		this.email = '';
	
	}
	setUser1(_id, email) {
		this._id = _id;
		this.email = email;
		return this;
	}	
}

export default MyUser;
