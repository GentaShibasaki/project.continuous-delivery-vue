const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();

const server = require("../server/app");
const db = require("../server/knex");

describe("tests for our server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET api/locations", () => {
    it("this api can get all locations data", async () => {
      const res = await request.get("/api/locations");
      console.log("YEY!!");
      const result = await db.select().table("locations");
      JSON.stringify(res.body).should.equal(JSON.stringify(result));
    });
  });
});
