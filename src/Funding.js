import request from "./request";
import Sessions from "./Sessions";
import { Config, HOSTS } from "./Config";

/**
 * @class Funding
 * @description Static class for retrieving funding information.
 */
export default class Funding {
	/**
	 * @name ALLOWED_TYPES
	 * @memberof Funding
	 * @constant
	 * @property {string} DEPOSIT
	 * @property {string} WITHDRAW
	 * @property {string} DEPOSIT_AND_WITHDRAW
	 */
	static ALLOWED_TYPES = {
		DEPOSIT: "DEPOSIT",
		WITHDRAW: "WITHDRAW",
		DEPOSIT_AND_WITHDRAW: "DEPOSIT_AND_WITHDRAW",
	};

	/**
	 * @param {object} options
	 */
	static getFundingMethods({
		userID,
		accountID,
		language,
		minAmount,
		maxAmount,
		amount,
		filters = {},
	}: {
		userID: string,
		accountID: string,
		language?: string,
		minAmount?: number,
		maxAmount?: number,
		amount?: number,
		filters?: {
			name: string,
			currency: string,
			country: string,
			allowed: string,
		},
	} = {}): Promise<Array<Object>> {
		if (amount && (minAmount || maxAmount)) {
			throw new Error(`"amount" is not compatible with "minAmount" or "maxAmount."`);
		}

		let queryString = `partner=${Config.appsPartnerID}&userID=${userID}&accountID=${accountID}`;
		if (language) queryString += `&language=${language}`;
		if (minAmount) queryString += `&minAmount=${minAmount}`;
		if (maxAmount) queryString += `&maxAmount=${maxAmount}`;
		if (amount) queryString += `&amount=${amount}`;
		if (filters.name) queryString += `&filter[name]=${filters.name}`;
		if (filters.country) queryString += `&filter[country]=${filters.country}`;
		if (filters.currency) queryString += `&filter[currency]=${filters.currency}`;
		if (filters.allowed) queryString += `&filter[allowed]=${filters.allowed}`;

		return request({
			method: "GET",
			host: HOSTS.APPS,
			endpoint: `/funding/methods?${queryString}`,
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => body);
	}

	/**
	 * @static
	 */
	static getPastDeposits(userID: string) {
		return request({
			endpoint: "/funding/status",
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => body.data);
	}

	/**
	 * @static
	 */
	static getSubscriptionPlans(userID: string) {
		return request({
			endpoint: "/funding/ach/subscription-plans",
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => {
			const pricing = [].concat(body.data)
				.sort((x, y) => x.amount - y.amount)
				.map(price => Object.assign(
					{},
					price,
					{ amount: Number(price.amount / 100) },
				));

			return pricing;
		});
	}
}
