
let Proveedor = require("../models/Proveedor");
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Proveedores", () => {
  beforeEach((done) => {
    Proveedor.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET proveedor", () => {
    it("it should GET all the proveedores", (done) => {
      chai
        .request(app)
        .get("/api/proveedores")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST proveedor", () => {
    it("it should new POST a proveedor", (done) => {
      let increment_client_id = 1;
      let proveedor = {
          client_id : increment_client_id++ + "MP12345",
          email : "miguelpalma@macropay.mx",
          rfc : "PALM961201TN2",
          city : "Campeche",
          country : "MX",
          cp : "24500",
          name : "Mikky Enterprise",
          region : "NA",
          street : "Calle 20",
          surname : "Mikky SA de CV",
          title : "Mikky",
          regimen_fiscal : "RN2"
      };
      chai
        .request(app)
        .post("/api/proveedores")
        .send(proveedor)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id proveedor", () => {
    it("it should GET a proveedor by the id", (done) => {
      let increment_client_id = 1;
      let proveedor = new Proveedor({
        client_id : increment_client_id++ + "MP12345",
        email : "miguelpalma@macropay.mx",
        rfc : "PALM961201TN2",
        city : "Campeche",
        country : "MX",
        cp : "24500",
        name : "Mikky Enterprise",
        region : "NA",
        street : "Calle 20",
        surname : "Mikky SA de CV",
        title : "Mikky",
        regimen_fiscal : "RN2"
      });
      proveedor.save((err, proveedor) => {
        chai
          .request(app)
          .get("/api/proveedores/" + proveedor.id)
          .send(proveedor)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id proveedor", () => {
    it("it should UPDATE a proveedor given the id", (done) => {
      let proveedor = new Proveedor({
        client_id : "MP12345",
        email : "miguelpalma@macropay.mx",
        rfc : "PALM961201TN2",
        city : "Campeche",
        country : "MX",
        cp : "24500",
        name : "Mikky Enterprise",
        region : "NA",
        street : "Calle 20",
        surname : "Mikky SA de CV",
        title : "Mikky",
        regimen_fiscal : "RN2"
      });
      proveedor.save((err, blog) => {
        console.log(proveedor.id);
        chai
          .request(app)
          .put("/api/proveedores/" + proveedor.id)
          .send({
            client_id : "DD12345",
            email : "deivid.poot@macropay.mx",
            rfc : "PALM961201TN2",
            city : "Campeche",
            country : "MX",
            cp : "24500",
            name : "Mikky Enterprise",
            region : "NA",
            street : "Calle 20",
            surname : "Mikky SA de CV",
            title : "Mikky",
            regimen_fiscal : "RN2"
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id proveedor", () => {
    it("it should DELETE a proveedor given the id", (done) => {
      let proveedor = new Proveedor({
        client_id : "MP12345",
        email : "miguelpalma@macropay.mx",
        rfc : "PALM961201TN2",
        city : "Campeche",
        country : "MX",
        cp : "24500",
        name : "Mikky Enterprise",
        region : "NA",
        street : "Calle 20",
        surname : "Mikky SA de CV",
        title : "Mikky",
        regimen_fiscal : "RN2"
      });
      proveedor.save((err, proveedor) => {
        chai
          .request(app)
          .delete("/api/proveedores/" + proveedor.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});
