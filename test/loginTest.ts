import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import { describe, it } from "mocha";

chai.use(chaiHttp);

//test if a user can sign up
describe("User test", () => {
  describe("#signUpUser", () => {
    it("should create a new user", () => {
      chai
        .request("127.0.0.1:3011")
        .post("/api/users/login")
        .send({
          email: "alexxx@mail.com",
          password: "123456",
        })
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.be.json;
          expect(res).to.have.status(200);
        });
    });
  });
});
