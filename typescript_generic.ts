class APIResponseWrapper<T> {
	constructor(private response: T) {}

	getRequiredFields<K extends keyof T>(keys: K[]): Required<Pick<T, K>> {
		const result = {} as Required<Pick<T, K>>
		keys.forEach(k => {
			if (this.response[k] == null || this.response[k] == undefined) {
				throw new Error(`missing required field: ${String(k)}`)
			}
			result[k] = this.response[k]
		})
		return result
	}
}

interface User {
		id: number;
		name: string;
		email: string
		phoneNumber: string
}

const userResponse: Partial<User> = {
	id: 1,
	name: 'A Nguyen'
}
const userWrapper = new APIResponseWrapper<Partial<User>>(userResponse)
try {
	const requiredFields = userWrapper.getRequiredFields(['id', 'name', 'email'] as const)
	console.log(requiredFields)	
} catch (err) {
	console.error("")
}
