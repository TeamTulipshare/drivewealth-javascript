import Account from "./Account";
import Error from "./Error";
import Funding from "./Funding";
import Instrument from "./Instrument";
import Order from "./Order";
import User from "./User";
import Sessions from "./Sessions";
import { setup, ENVIRONMENTS } from "./Config";
import request from "./request";

export default {
    ENVIRONMENTS,

    Account,
    Error,
    Funding,
    Instrument,
    Order,
    User,
    Sessions,

    setup,
    request,
};
