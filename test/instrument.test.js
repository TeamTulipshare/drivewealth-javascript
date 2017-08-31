import assert from "assert";
import { Instrument } from "../lib/drivewealth";

describe("Instrument", () => {
	test("getBySymbol", async () => {
		expect(
			await Instrument.getBySymbol("AAPL"),
		).toHaveProperty("instrumentID");
	});

	test("getByID", async () => {
		expect(
			await Instrument.getByID("a67422af-8504-43df-9e63-7361eb0bd99e"),
		).toHaveProperty("symbol");
	});

	test("getAll", async () => {
		assert(Array.isArray(
			await Instrument.getAll(),
		));
	});

	test("search", async () => {
		assert(Array.isArray(
			await Instrument.search({
				name: "Apple",
				symbol: "AAPL",
			}),
		));
	});

	test("getQuote", async () => {
		expect(
			await Instrument.getQuote("AAPL"),
		).toHaveProperty("ask");
	});

	test("getChartData", async () => {
		assert(Array.isArray(
			await Instrument.getChartData(
				"a67422af-8504-43df-9e63-7361eb0bd99e",
				Instrument.CHART_COMPRESSIONS.MINUTE_30,
				1,
			),
		));
	});
});
