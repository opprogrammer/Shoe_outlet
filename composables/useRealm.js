import * as Realm from "realm-web";


export const useMyRealmApp = () => {

	
const app = new Realm.App({ id: "application-shoe-qjdak" });




	return {
		app,
		Realm,
		
	};
	

};