/* @flow */
import request from "./request";
import Sessions from "./Sessions";

export type Quote = {
	bid: number,
	ask: number,
};

/**
 * @class Instrument
 * @description Use the constructor if you have a flat JSON object that you would like to access instance methods on.
 * @param {object} data - See response at http://developer.drivewealth.com/docs/get_instrument
 */
export default class Instrument {
	instrumentID: string;
	name: string;
	exchangeID: string;
	instrumentTypeID: string;
	orderSizeMax: number;
	orderSizeMin: number;
	orderSizeStep: number;
	rateAsk: number;
	rateBid: number;
	ratePrecision: number;
	symbol: string;
	tradeStatus: string;
	urlImage: string;
	urlInvestor: string;
	chaikinPgr: string;
	priorClose: number;
	marketState: number;
	fundamentalDataModel: Object;

	constructor(data: Object) {
		Object.assign(this, data);
	}

	/**
	 * @name TRADE_STATUSES
	 * @memberof Instrument
	 * @constant
	 * @property {string} INACTIVE
	 * @property {string} ACTIVE
	 * @property {string} CLOSED
	 */
	static TRADE_STATUSES: {[status: string]: string} = {
		INACTIVE: "0",
		ACTIVE: "1",
		CLOSED: "2",
	};

	/**
	 * @name CHART_COMPRESSIONS
	 * @memberof Instrument
	 * @constant
	 * @property {number} DAY
	 * @property {number} MINUTE_1
	 * @property {number} MINUTE_5
	 * @property {number} MINUTE_30
	 * @property {number} HOUR
	 * @property {number} WEEK
	 */
	static CHART_COMPRESSIONS: {[status: string]: number} = {
		DAY: 0,
		MINUTE_1: 1,
		MINUTE_5: 4,
		MINUTE_30: 8,
		HOUR: 9,
		WEEK: 10,
	};

	/**
	 * @static
	 */
	static getBySymbol(symbol: Array<string> | string): Promise<Array<Instrument> | Instrument> {
		const symbols = typeof symbol === "string" ? [symbol] : symbol;

		return request({
			method: "GET",
			endpoint: `/instruments?symbols=${symbols.join(",")}`,
			sessionKey: Sessions.getAny(),
		}).then(({ body }) => {
			body = body.map(instrument => new Instrument(instrument));
			return typeof symbol === "string" ? body[0] : body;
		});
	}

	/**
	 * @static
	 */
	static getByID(id: string, includeFundamentals: boolean = true): Promise<Instrument> {
		return request({
			method: "GET",
			endpoint: `/instruments/${id}${includeFundamentals ? "?options=F" : ""}`,
			sessionKey: Sessions.getAny(),
		}).then(({ body }) => new Instrument(body));
	}

	/**
	 * @static
	 */
	static getAll(tradeStatus?: string = "-1"): Promise<Array<Instrument>> {
		return request({
			method: "GET",
			endpoint: `/instruments?tradeStatus=${tradeStatus}`,
			sessionKey: Sessions.getAny(),
		}).then(({ body }) => body.map(instrument => new Instrument(instrument)));
	}

	/**
	 * @static
	 */
	static search(criteria: { name?: string, symbol?: string }): Promise<Array<Instrument>> {
		let queryString = "?";
		if (criteria.symbol) queryString += `symbol=${criteria.symbol}&`;
		if (criteria.name) queryString += `name=${criteria.name}&`;

		return request({
			method: "GET",
			endpoint: `/instruments${queryString}`,
			sessionKey: Sessions.getAny(),
		}).then(({ body }) => body.map(instrument => new Instrument(instrument)));
	}

	/**
	 * @instance
	 */
	getQuote(): Promise<Quote> {
		return Instrument.getQuote(this.symbol);
	}

	/**
	 * @static
	 */
	static getQuote(
		symbol: string | Instrument | Array<string> | Array<Instrument>,
	): Promise<Quote | {[symbol: string]: Quote}> {
		const symbols: Array<string> = (Array.isArray(symbol) ? symbol : [symbol])
			.map(sym => sym instanceof Instrument ? sym.symbol : sym);

		return request({
			method: "GET",
			endpoint: `/quotes?symbols=${symbols.join(",")}`,
			sessionKey: Sessions.getAny(),
			addlHeaders: {
				Accept: "text/plain",
			},
		}).then(({ body }) => {
			let obj = {};
			body = body.split("|").slice(10);
			for (const rawQuote of body) {
				const parsedQuote = rawQuote.split(",");
				obj[parsedQuote[0]] = {
					bid: Number(parsedQuote[1]),
					ask: Number(parsedQuote[2]),
				};
			}
			if (!Array.isArray(symbol)) obj = obj[symbols[0]];
			return obj;
		});
	}

	/**
	 * @param {date} dateStart
	 * @param {date} dateEnd
	 */
	/**
	 * @param {number} tradingDays
	 */
	getChartData(compression: number) {
		if (arguments.length === 3) {
			return Instrument.getChartData(
				this.instrumentID,
				compression,
				arguments[1],
				arguments[2],
			);
		}
		return Instrument.getChartData(this.instrumentID, compression, arguments[1]);
	}

	/**
	 * @param {date} dateStart
	 * @param {date} dateEnd
	 */
	/**
	 * @param {number} tradingDays
	 */
	static getChartData(instrumentID: string, compression: number): Promise<Array<string>> {
		let timeParams;
		if (arguments.length === 4) {
			const dateStart = arguments[2].toISOString().replace(/\.\d{3}/, "");
			const dateEnd = arguments[3].toISOString().replace(/\.\d{3}/, "");
			timeParams = `dateStart=${dateStart}&dateEnd=${dateEnd}`;
		} else {
			timeParams = `tradingDays=${arguments[2]}`;
		}

		return request({
			method: "GET",
			endpoint: `/bars?instrumentID=${instrumentID}&compression=${compression}&${timeParams}`,
			sessionKey: Sessions.getAny(),
		}).then(({ body }) => body.data.split("|"));
	}

}
